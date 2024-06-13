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
    const info = await transporter.sendMail({
        from: process.env.MAILUSER,
        to: mail,
        subject: `Hola!`,
        text: "Hello world?",
        html: "<b>Hola mundo desde node mailer</b>",
    });
}

// sendEmail(username, mail).catch(console.error);

module.exports = transporter;
module.exports = sendEmail;