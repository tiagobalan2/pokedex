const pokemonModel = require('../models/pokemon');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokémon não encontrado');
    }
};

const createPokemon = (req, res) => {
    const { nome, tipo, imagem } = req.body; // Certifique-se de que os nomes dos campos estão corretos
    const novoPokemon = pokemonModel.createPokemon(nome, tipo, imagem);
    res.redirect('/pokemons'); // Redireciona para a lista de pokémons após a criação
};

module.exports = { getAllPokemons, getPokemon, createPokemon };
