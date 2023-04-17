# Plantilla de agenda de horas Dev&Pro

<p align="center">
  <img src=src/assets/logoDevPro.png alt="Logo Dev & Pro"/>
</p>

## ¿Qué busca resolver esta plantilla?

Esta plantilla busca ser una solución rápida para el equipo de Dev&Pro al momento de que se le sea requerido un sistema de agenda de horas. Esta está realizada en base a <strong>Express.js</strong> y <strong>Vue 3</strong>.

## ¿Qué posee esta plantilla?

En esta plantilla podemos encontrar varias dependencias presentes para el funcionamiento de nuestro sistema de agenda de horas, como puede ser:

- Integración de bootstrap y sus respectivos íconos.
- Implementación de axios como cliente HTTP para la comunicación entre frontend y backend.
- Dependencias de node básicas.
- Implementación de vue-router, para el control de vistas de frontend.
- Implementación de vue3-google-map, para la carga y muestra de Google Maps en el sitio.
- Express.js para el trabajo y acciones del backend.
- Integración de dotenv para el trabajo de variables de entorno y que estas no sean públicas en el repositorio ni en los archivos locales del sistema.
- Integración de cors para comunicación segura entre frontend y backend.
- Integración de nodemailer para el envío de correos electrónicos desde el sistema.
- Integración de body-parser, que permite la utilización de request y response.
- Integración de mysql2, que permite la conexión a bases de dato MySQL.
- Integración de multer, que permite el trabajo con archivos entre cliente y servidor.

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