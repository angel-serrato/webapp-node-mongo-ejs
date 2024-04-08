const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS
    },
    tls: {
        // servername: 'smtp.gmail.com',
        rejectUnauthorized: false
    }
});

/* Verifying the SMTP connection  */

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Does the SMTP connection work?', success);
    }
});

async function sendEmail(username, mail) {
    const info = await transporter.sendMail({
        from: process.env.MAILUSER,
        to: mail,
        subject: `Hola ${username}!`,
        text: "Hello world?",
        html: "<b>Hola mundo desde node mailer</b>",
    });
    console.log("Message sent: %s", info.messageId);
}

// sendEmail(username, mail).catch(console.error);

module.exports = transporter;
module.exports = sendEmail;