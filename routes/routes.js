const express = require('express');
const router = express.Router();
const path = require('path');
const collection = require('./mongoConfig');
const sendEmail = require('./nodemailerConfig');

const templatePath = path.join(__dirname, '../views');

router.get('/', (req, res) => {
    res.sendFile(path.join(templatePath, 'login.html'));
});

router.get('/signup', (req, res) => {
    res.sendFile(path.join(templatePath, 'signup.html'));
});

router.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name });
        if (check.password === req.body.password) {
            res.sendFile(path.join(templatePath, 'home.html'));
        } else {
            res.send('Invalid username or password');
        }
    } catch (error) {
        res.send('Invalid username or password');
    }
});

router.post('/signup', async (req, res) => {
    try {
        const data = {
            email: req.body.email,
            password: req.body.password
        };
        await collection.insertMany([data]);
        sendEmail(req.body.email);
        res.sendFile(path.join(templatePath, 'home.html'));
    } catch (error) {
        console.error('Error al registrar al usuario:', error);
        res.status(500).send('Error al registrar al usuario');
    }
});

module.exports = router;

// async function sendWelcomeEmail(name, email) {
//     return new Promise((resolve, reject) => {
//         const mail = {
//             from: process.env.MAILUSER,
//             to: email,
//             subject: `Hola ${name}!`,
//             text: 'Hola, bienvenido!',
//             html: '<h2>Hola, bienvenido a mi página web!</h2>'
//         };

//         transporter.sendMail(mail, (err, info) => {
//             if (err) {
//                 console.log("Error sending email: ", err);
//                 reject(err);
//             } else {
//                 console.log("Email sent. ", info);
//                 resolve(info);
//             }
//         });
//     });
// }

/* Old */

// app.post('/signup', async (req, res) => {
//     try {
//         const data = {
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         };
//         await collection.insertMany([data]);
//         await sendWelcomeEmail(req.body.name, req.body.email);
//         res.sendFile(path.join(templatePath, 'home.html'));
//     } catch (error) {
//         console.error('Error al registrar al usuario:', error);
//         res.status(500).send('Error al registrar al usuario');
//     }
// });

// async function sendWelcomeEmail(name, email) {
//     return new Promise((resolve, reject) => {
//         const mail = {
//             from: 'rhoda.feeney@ethereal.email',
//             to: email,
//             subject: `Hola ${name}!`,
//             text: 'Hola, bienvenido!',
//             html: '<h2>Hola, bienvenido a mi página web!</h2>'
//         };

//         transporter.sendMail(mail, (err, info) => {
//             if (err) {
//                 console.log("Error sending email: ", err);
//                 reject(err);
//             } else {
//                 console.log("Email sent. ", info);
//                 resolve(info);
//             }
//         });
//     });
// }

// app.post('/login', async (req, res) => {
//     try {
//         const check = await collection.findOne({ name: req.body.name });
//         if (check.password === req.body.password) {
//             res.sendFile(path.join(templatePath, 'home.html'));
//         } else {
//             res.send('Invalid username or password');
//         }
//     } catch (error) {
//         res.send('Invalid username or password');
//     }
// });

// const express = require('express');
// const app = express();
// const path = require('path');
// const collection = require('./routes/mongoConfig');
// const port = process.env.PORT || 3000;
// const templatePath = path.join(__dirname, './views');

// app.use(express.static(templatePath));

// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`)
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(templatePath, 'login.html'));
// });

// app.get('/signup', (req, res) => {
//     res.sendFile(path.join(templatePath, 'signup.html'));
// });

/* Oldest code */

// app.post('/signup', async (req, res) => {
//     try {
//         const data = {
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         }
//         await collection.insertMany([data]);
//         let mail = {
//             from: process.env.GMAILUSER,
//             to: req.body.email,
//             subject: "Hola " + req.body.name + "!",
//             text: "Hola, bienvenido!",
//             html: `
//                     <h2>Hola, bienvenido a mi página web!</h2>
//                 `
//         };
//         transporter.sendMail(mail, (err, info) => {
//             if (err) {
//                 console.log("Error sending email: ", err);
//             } else {
//                 console.log("Email sent. ", info);
//             }
//         });
//         res.sendFile(path.join(templatePath, 'home.html'));
//     } catch (error) {
//         console.error('Error al registrar al usuario:', error);
//         res.status(500).send('Error al registrar al usuario');
//     }
// });