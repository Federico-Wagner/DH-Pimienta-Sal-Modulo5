// Módulos
const express = require('express');
const app = express();
const path = require('path');


// Acá falta uno... 😇 --listo
const rutaMain = require('./src/routes/mainRouter.js')

// Configuración
//app.use(express.static('public'));

app.use(express.static(path.resolve(__dirname, './public')));

// Acá falta el template engine --listo
app.set('view engine', 'ejs');

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS --listo
app.use('/', rutaMain);


app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
});

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})