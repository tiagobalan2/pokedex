const express = require('express');
const router = express.Router();
const treinadorController = require('../src/controllers/treinadorController');

// Rota para listar todos os treinadores
router.get('/', treinadorController.listarTreinadores);

// Rota para obter um treinador específico pelo ID
router.get('/:id', treinadorController.buscarTreinador);

// Rota para cadastrar um novo treinador
router.post('/', treinadorController.cadastrarTreinador);

module.exports = router;
