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
    const messages = req.flash('welcome')
    res.render('home', { title: 'Welcome to the dashboard', messages })
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Log In' });
});

router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up' });
});

router.post('/login', async (req, res) => {
    try {
        const user = await collection.findOne({ email: req.body.email });
        if (user) {
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (passwordMatch) {
                req.flash('welcome', 'Welcome!')
                res.redirect('/home')
            } else {
                console.log('Usuario o contraseña incorrecto')
                res.redirect('/login')
            }
        } else {
            console.log('Usuario o contraseña incorrecto')
            res.redirect('/login')
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
        }
        await collection.insertMany([data])
        sendEmail(req.body.email)
        req.flash('welcome', 'Welcome!')
        res.redirect('home')
    } catch (error) {
        console.error('Error al registrar al usuario:', error)
        res.status(500).send('Error al registrar al usuario')
    }
})

module.exports = router;