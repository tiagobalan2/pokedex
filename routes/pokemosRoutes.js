const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Rota para obter todos os Pokémons
router.get('/', pokemonController.getAllPokemons);

// Rota para obter um Pokémon específico pelo ID
router.get('/pokemon/:id', pokemonController.getPokemon);

module.exports = router;
