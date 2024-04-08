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
        rejectUnauthorized: false
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