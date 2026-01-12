require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const zonesRoutes = require('./routes/zones');
const spacesRoutes = require('./routes/spaces');
const db = require('./config/db');

const app = express();
const port = 3000;

// Deshabilitar exposición de información de versión
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Routes
app.use('/zones', zonesRoutes);
app.use('/spaces', spacesRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke! ' + err.message);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
  // Test de conexión a Base de Datos
  db.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error(' Error de conexión a BD:', err.message);
    } else {
      console.log(' Conexión a BD exitosa -', result.rows[0].now);
    }
  });
});