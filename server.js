// Archivo que monta nuestro servidor, en este caso en el puerto 3000

require("dotenv").config(); // Llama las variables del archivo .env para poder ser utilizadas
const express = require("express"); // Nos permite crear nuestro servidos a través de express.js
const bodyParser = require("body-parser"); // Librería que permite utilizar request y response
const nodemailer = require("nodemailer"); // Librería que permite el envío de correos electrónicos
const cors = require("cors"); // Librería que permite activar protocolo CORS para envío de datos entre el front y el back
const mysql = require("mysql2"); // Librería que permite trabajar con mysql
const multer = require("multer"); //Librería a utilizar para la carga de archivos
const fs = require("fs"); // Módulo de node.js que permite trabajar con archivos del cliente
const { registerRuntimeCompiler } = require("vue");

const app = express();

//Se declara el middleware de multer con el destino de las imágenes
const upload = multer({ dest: "src/img/blog" });

app.use(cors()).use(bodyParser.json());

// Ruta a llamar para hacer el envío de un correo
app.post("/contact", (req, res) => {
  const { name, email, message, useremail } = req.body;

  // Envía correo a través de nodemailer, se debe verificar el gestor y se usan las variables desde el archivo .env
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    // https://nodemailer.com/message/ dirección en donde se encuentran las diferentes propiedades de nodemailer
    from: email,
    to: "kako.ljca@gmail.com",
    replyTo: useremail,
    subject: "Nuevo mensaje desde sitio web",
    html: `<b>Nombre:</b> ${name}<br><b>Correo:</b> ${useremail}<br><b>Mensaje:</b> ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error enviando el correo.");
    } else {
      console.log(`Correo enviado: ${info.response}`);
      res.status(200).send("Correo enviado correctamente!");
    }
  });
});

// DATABASE

// Datos de conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSDB,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectarse a MySQL: ", err);
    return;
  }
  console.log("Conectado a MySQL");
});

// Ruta a llamar para cargar las entradas del blog
app.get("/blog", (req, res) => {
  connection.query("SELECT * FROM blog", (err, results) => {
    if (err) {
      console.error("Error al cargar el blog: ", err);
      res.status(500).send("Error al cargar el blog");
      return;
    }
    const blog_data = results.map((blog) => ({
      id: blog.id,
      title: blog.title,
      body: blog.body,
      image: Buffer.from(blog.image).toString("base64"),
    }));
    res.send(blog_data);
  });
});

// Ruta a llamar para cargar una entrada en específico del blog
app.get("/post/:id", (req, res) => {
  connection.query(
    "SELECT * FROM blog WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.error("Error al cargar la entrada del blog: ", err);
        res.status(500).send("Error al cargar la entrada del blog");
        return;
      }
      if (results.length === 0) {
        res.status(404).send("Entrada no encontrada");
        return;
      }
      const post_data = results.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        image: Buffer.from(post.image).toString("base64"),
      }));
      res.send(post_data[0]);
    }
  );
});

// Ruta para crear una nueva entrada en el blog
app.post("/post", (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    res.status(400).send("Título y cuerpo son campos requeridos");
    return;
  }
  connection.query(
    "INSERT INTO blog (title, body) VALUES (?, ?)",
    [title, body],
    (err, result) => {
      if (err) {
        console.error("Error al crear la entrada: ", err);
        res.status(500).send("Error al crear la entrada");
        return;
      }
      const createdPost = { id: result.insertId, title, body };
      res.json(createdPost);
    }
  );
});

// Ruta para editar la última entrada del blog para cargar la imagen
app.post("/upload", upload.single("image"), (req, res) => {
  const imageBuffer = fs.readFileSync(req.file.path);
  connection.query(
    "UPDATE blog SET image = (?) WHERE id = (SELECT LAST_INSERT_ID())",
    [imageBuffer],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error al subir la imagen");
      } else {
        res.status(200).send("Imagen subida correctamente");
      }
    }
  );
});

// Se monta el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Server iniciado en el puerto 3000");
});
