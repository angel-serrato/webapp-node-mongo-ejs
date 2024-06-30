# Project

<h1 align="center">Sign In | Sign Up using MongoDB</h1>

<div align="center">Este proyecto implementa un sistema de inicio y cierre de sesión</div>

<!-- <div align="center">
  <h3>
    <a href="#">
      Demo
    </a>
    <span>|</span>
    <a href="#">
      Video
    </a>
  </h3>
</div> -->

---

- [Overview](#overview)
  - [Built with](#built-with)
- [Acknowledgements](#acknowledgements)
- [Install](#install)
- [Contact](#contact)
- [Credits](#credits)

## Overview

![Screenshot](https://github.com/angel-serrato/web-express-nodemailer-mongo/assets/155343972/1f808c27-e9ac-481e-bcb7-5e7bf91f84bf)

Este proyecto implementa un sistema completo de inicio y cierre de sesión utilizando Node.js y Express, junto con otras tecnologías populares como MongoDB, Nodemailer para envío de correos electrónicos, y manejo de sesiones con express-session y connect-flash.

Se utiliza bcrypt para el cifrado seguro de contraseñas y EJS como motor de plantillas para las vistas HTML.

### Built with

- [Node.js](https://nodejs.org/en)
- [EJS](https://www.npmjs.com/package/ejs)
- [Express.js](https://expressjs.com/)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-flash](https://www.npmjs.com/package/connect-flash)
- [MongoDB](https://www.mongodb.com/)
- [Nodemailer](https://nodemailer.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Bootstrap](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)

## Acknowledgements

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Install

### Requisitos previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js y npm(Node Package Manager)
- MongoDB

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

1. Forkea el repositorio.

2. Clona el repositorio:

```console
git clone https://github.com/<usuario-github>/web-express-nodemailer-mongo
```

3. Instala las dependencias

```console
npm install
```

4. Configura las variables de entorno: 

Crea un archivo .env en el directorio raíz del proyecto y configura las variables necesarias:

```console
CLUSTER = cluster de MongoDB
MAILUSER = correo para Nodemailer
MAILPASS = contraseña para Nodemailer
```

5. Ejecuta el servidor:

```console
npm start
```

## Contact

- Website [portfolio-angel-serrato.vercel.app](https://portfolio-angel-serrato.vercel.app/)
- GitHub [@angel-serrato](https://github.com/angel-serrato)
- LinkedIn [/in/angel-serrato/](https://www.linkedin.com/in/angel-serrato/)

## Credits

https://www.youtube.com/watch?v=V8dYGNfHjfk creating the connection and crud operations

https://www.youtube.com/watch?v=QzEjUOYNoIs connecting to mongodb atlas

https://www.youtube.com/watch?v=-NfsmF-6BHo dotenv variables

https://www.youtube.com/watch?v=rleozFydcKk nodemailer con gmail

https://nodemailer.com/about/#example nodemailer configuration example

https://www.youtube.com/watch?v=mm9oIxR8YDU&t=4s express js express sessions connect-flash

https://www.youtube.com/watch?v=lSa1EIJapLg&t=11s Display Node.js Flash Messages using Connect Flash and EJS

## DevDependencies

https://ethereal.email/ es un smtp falso para enviar correos de confirmacion de creacion de cuenta 
