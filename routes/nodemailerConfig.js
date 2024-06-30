const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS
    },
});

/* Verifying the SMTP connection  */
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Does the SMTP connection work?', success);
    }
});

async function sendEmail(mail) {
    try {
        const info = await transporter.sendMail({
            from: process.env.MAILUSER,
            to: mail,
            subject: `Bienvenido a nuestra página web!`,
            text: "Hello world?",
            html: `
                <h2>¡Bienvenido!</h2>
                <p>Gracias por registrarte en nuestra página. Estamos emocionados de tenerte como parte de nuestra comunidad.</p>
                <p>Aquí encontrarás recursos útiles y novedades sobre nuestros productos/servicios.</p>
                <p>¡Esperamos que disfrutes tu experiencia con nosotros!</p>
                <p>Saludos,<br>El equipo de SerratoDev.</p>
                `,
        });
        return info
    } catch (error) {
        console.error('Error al enviar el correo de bienvenida:', error);
        throw error;
    }
}

module.exports = transporter;
module.exports = sendEmail;