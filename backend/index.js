// IMPORTS
const express = require('express');

// CRIANDO A APLICAÇÃO
const app = express();

// EXEMPLO DE UMA ROTA GET
app.get('/', (req, res) => {
  return res.json({
    event: 'Week 11 - Omnistack',
    student: 'Arthur Ferreira'
  });
})

// DEFININDO A PORTA QUE SERÁ USADA
app.listen('3333');