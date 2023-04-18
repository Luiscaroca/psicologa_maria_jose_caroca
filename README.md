# Plantilla de agenda de horas Dev&Pro

<p align="center">
  <img src=src/assets/logoDevPro.png alt="Logo Dev & Pro"/>
</p>

## ¿Qué busca resolver esta plantilla?

Esta plantilla busca ser una solución rápida para el equipo de Dev&Pro al momento de que se le sea requerido un sistema de agenda de horas. Esta está realizada en base a <strong>Express.js</strong> y <strong>Vue 3</strong>.

## ¿Qué posee esta plantilla?

En esta plantilla podemos encontrar varias dependencias presentes para el funcionamiento de nuestro sistema de agenda de horas, como puede ser:

- Integración de <strong>bootstrap y sus respectivos íconos.</strong>
- Implementación de <strong>axios como cliente HTTP</strong> para la comunicación entre frontend y backend.
- <strong>Dependencias de node básicas.</strong>
- Implementación de <strong>vue-router</strong>, para el control de vistas de frontend.
- Implementación de <strong>vue3-google-map</strong>, para la carga y muestra de <strong>Google Maps</strong> en el sitio.
- <strong>Express.js</strong> para el trabajo y acciones del backend.
- Integración de <strong>dotenv</strong> para el trabajo de variables de entorno y que estas no sean públicas en el repositorio ni en los archivos locales del sistema.
- Integración de <strong>cors</strong> para comunicación segura entre frontend y backend.
- Integración de <strong>nodemailer</strong> para el envío de correos electrónicos desde el sistema.
- Integración de <strong>body-parser</strong>, que permite la utilización de <strong>request</strong> y <strong>response.</strong>
- Integración de <strong>mysql2</strong>, que permite la conexión a bases de datos MySQL.
- Integración de <strong>multer</strong>, que permite el trabajo con archivos entre cliente y servidor.
- Integración de <strong>knex</strong>, que permite el trabajo con migraciones en base a modelos previamente generados.

Se irán agregando nuevas funciones a medida que la plantilla vaya evolucionando.

## ¿Cómo utilizar la plantilla?

El primer paso es clonar este repositorio con el comando:
```
git clone https://github.com/Dev-ProConsultora/agenda-template.git
```
Luego se debe crear el archivo <strong>.env</strong> con el siguiente comando:
```
cp .env.example .env
```
Finalmente, se deben instalar los módulos de node con el siguiente comando:
```
npm install
```

## ¿Cómo montar el proyecto?

Para montar el proyecto se deben utilizar 2 terminales, una para nuestro frontend y otra para nuestro backend.

Para ejecutar nuestro frontend se debe utilizar el siguiente comando:
```
npm run serve
```
Para ejecutar nuestro backend se debe utilizar el siguiente comando:
```
node server.js
```

## ¿Cómo trabajar con las migraciones?

Las migraciones nos permiten trabajar a todos los miembros del equipo con exactamente la misma base de datos sin la necesidad de hacer creación manual de estas. Para correr las migraciones debemos utilizar el siguiente comando:
```
npx knex migrate:latest
```
Mientras que para eliminar la última base de datos agregada a través de migraciones debemos utilizar el siguiente comando:
```
npx kanex migrate:rollback
```
Finalmente, si deseamos crear una nueva migración se debe utilizar el siguiente comando:
```
npx knex migrate:make [NOMBRE_DE_TABLA]
```
Para mantener el formato de creación de las migraciones se puede consultar las tablas previamente creadas y manejarlas todas de la misma manera.