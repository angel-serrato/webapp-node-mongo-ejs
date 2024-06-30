const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/index');
const path = require('path');
const auth = require('./routes/auth')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use(session({
    secret: 'estoesdemasiadosecretomucho',
    resave: false,
    saveUninitialized: false,
    // Session timeout de 60 segundos
    cookie: {
        maxAge: 60000
    }
}))
app.use(flash())

// Middleware que procesa connect-flash para colocar la variable message en el scope global
app.use((req, res, next) => {
    app.locals.message = req.flash('mensaje')
    next()
})

app.use(auth)
app.use(routes)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})