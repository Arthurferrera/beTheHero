// IMPORTS
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// CRIANDO A APLICAÇÃO
const routes  = express.Router();

// criando uma sessão - realizando o login
routes.post('/sessions', SessionController.create);
// listagem de ongs, sem filtro
routes.get('/ongs', OngController.index);
// cadastro de ongs
routes.post('/ongs', OngController.create);
// cadastro de incidentes
routes.post('/incidents', IncidentController.create);
// listagem dos incidentes
routes.get('/incidents', IncidentController.index);
// deletar um incidente
routes.delete('/incidents/:id', IncidentController.delete);
// listagem de incidentes específicos de uma clínica
routes.get('/profile', ProfileController.index);

module.exports = routes;