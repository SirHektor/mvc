
const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { raio } = req.body;
    const volume = Calculadora.VolumeEsfera(parseFloat(raio));
    res.send(`O volume da esfera é: ${volume}`);
});

module.exports = resultado;
