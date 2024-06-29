const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/routes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000
    }
}))
app.use(flash({ sessionKeyName: 'flashMessage' }))
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});