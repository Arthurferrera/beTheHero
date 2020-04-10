// IMPORTS
const express = require('express');
const OngController = require('./controllers/OngController');

// CRIANDO A APLICAÇÃO
const routes  = express.Router();

// listagem de ongs, sem filtro
routes.get('/ongs', OngController.index);
// cadastro de ongs
routes.post('/ongs', OngController.create);

module.exports = routes;