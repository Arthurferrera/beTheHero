// IMPORTS
const express = require('express');
const routes = require('./routes');

// CRIANDO A APLICAÇÃO
const app = express();

app.use(express.json());
app.use(routes);

// DEFININDO A PORTA QUE SERÁ USADA
app.listen(3333);