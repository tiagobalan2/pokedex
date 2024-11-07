const pokemons = [
    
];

// Função para obter todos os pokémons
const getPokemons = () => pokemons;

// Função para obter um pokémon pelo ID
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

// Função para criar um novo pokémon
const createPokemon = (nome, tipo, imagem) => {
    const novoPokemon = {
        id: pokemons.length + 1, // Cria um novo ID
        nome,
        tipo,
        imagem
    };
    pokemons.push(novoPokemon);
    return novoPokemon; // Retorna o novo pokémon criado
};

// Exporte todas as funções dentro de um único objeto
const PokemonModel = { getPokemons, getPokemonById, createPokemon };

module.exports = PokemonModel;
