const express = require('express')
const auth = express.Router()
const collection = require('./mongoConfig')
const sendEmail = require('./nodemailerConfig')
const bcrypt = require('bcrypt')

auth.post('/login', async (req, res) => {
    try {
        const user = await collection.findOne({ email: req.body.email })
        if (user) {
            const passwordMatch = await bcrypt.compare(req.body.password, user.password)
            if (passwordMatch) {
                req.session.user = user
                req.flash('mensaje', 'Welcome!')
                res.status(200).redirect('/home')
            } else {
                req.flash('mensaje', 'The email or password is incorrect')
                res.status(404).redirect('/login');
            }
        } else {
            req.flash('mensaje', 'No password or email provided')
            res.status(404).redirect('/login')
        }
    } catch (error) {
        req.flash('mensaje', 'An unexpected error ocurred')
        res.status(500).redirect('/login')
    }
})

auth.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const data = {
            email: req.body.email,
            password: hashedPassword
        }
        await collection.insertMany([data])
        sendEmail(req.body.email)
        req.session.user = data
        req.flash('mensaje', 'Welcome!')
        res.redirect('/home')
    } catch (error) {
        req.flash('mensaje', 'No password or email provided')
        res.status(500).redirect('/signup')
    }
})

auth.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error al cerrar la sesión', err)
            res.status(500).send('Error al cerrar la sesión')
        }
        console.log('Sesión cerrada')
        res.redirect('/login')
    })
})

module.exports = auth