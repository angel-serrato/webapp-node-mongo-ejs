const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

const templatePath = path.join(__dirname, './views');

app.use(express.static(templatePath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});