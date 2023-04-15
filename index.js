// Archivo que monta nuestro servidor, en este caso en el puerto 3000

require("dotenv").config();                 // Llama las variables del archivo .env para poder ser utilizadas
const express = require("express");         // Nos permite crear nuestro servidos a través de express.js
const bodyParser = require("body-parser");  // Librería que permite utilizar request y response
const nodemailer = require("nodemailer");   // Librería que permite el envío de correos electrónicos
const cors = require("cors");               // Librería que permite activar protocolo CORS para envío de datos entre el front y el back

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.listen(3000, () => {
  console.log("Server iniciado en el puerto 3000");
});
