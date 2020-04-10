// IMPORTS
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

// CRIANDO A APLICAÇÃO
const routes  = express.Router();

// listagem de ongs, sem filtro
routes.get('/ongs', OngController.index);
// cadastro de ongs
routes.post('/ongs', OngController.create);
// cadastro de incidentes
routes.post('/incidents', IncidentController.create);

module.exports = routes;