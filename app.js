const express = require('express')
const hbs = require('hbs');
const env = require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Nicolas Bolzan',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Nicolas Bolzan',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Nicolas Bolzan',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});