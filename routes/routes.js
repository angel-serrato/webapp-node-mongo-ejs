const express = require('express');
const router = express.Router();
const path = require('path');
const collection = require('./mongoConfig');
const sendEmail = require('./nodemailerConfig');
const bcrypt = require('bcrypt');

const templatePath = path.join(__dirname, '../views');

router.get('/', (req, res) => {
    res.render('login', { title: 'Log In' });
});

router.get('/home', (req, res) => {
    res.render('home', { title: 'Welcome' });
    req.flash('success')
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Log In' });
});

router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up' });
});

router.post('/login', async (req, res) => {
    try {
        req.flash('error', 'Usuario o contraseña incorrecta')
        const error = req.flash('error')
        const user = await collection.findOne({ email: req.body.email });
        if (user) {
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (passwordMatch) {
                req.flash('info', 'Bienvenido')
                const messages = req.flash('info')
                res.render('home', { messages })
            } else {
                res.render('login', { error });
            }
        } else {
            res.render('login', { error });
        }
    } catch (error) {
        console.error('Error de login:', error);
        res.status(500).send('Error de login');
    }
});


router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            email: req.body.email,
            password: hashedPassword
        };
        await collection.insertMany([data]);
        sendEmail(req.body.email);
        res.render(path.join(templatePath, 'home'));
    } catch (error) {
        console.error('Error al registrar al usuario:', error);
        res.status(500).send('Error al registrar al usuario');
    }
});

module.exports = router;