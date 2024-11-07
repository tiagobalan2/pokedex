const express = require('express');
const router = express.Router();
const pokemonController = require('../src/controllers/pokemonController');

// Rota para obter todos os Pokémons
router.get('/', pokemonController.getAllPokemons);

// Rota para exibir o formulário de cadastro


// Rota para criar um novo Pokémon
router.post('/', pokemonController.createPokemon);

// Rota para obter um Pokémon específico pelo ID
router.get('/:id', pokemonController.getPokemon);

module.exports = router;
