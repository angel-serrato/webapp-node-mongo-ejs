const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login', { title: 'Log In' })
})

router.get('/home', (req, res) => {
    if (req.session.user) {
        res.render('home', { title: 'Welcome to the Dashboard' })
    } else {
        res.redirect('login')
    }
})

router.get('/login', (req, res) => {
    res.render('login', { title: 'Log In' })
})

router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Register' })
})

module.exports = router