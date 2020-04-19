// IMPORTS
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

// CRIANDO A APLICAÇÃO
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// DEFININDO A PORTA QUE SERÁ USADA
app.listen(3333);