const treinadores = [];

const getTreinadores = () => treinadores;

const getTreinadorById = (id) => treinadores.find(t => t.id === parseInt(id));

const createTreinador = (nome, pokemons) => {
    const novoTreinador = {
        id: treinadores.length + 1,
        nome,
        pokemons, // Aqui, espera-se que 'pokemons' seja um array de Pokémon
    };
    treinadores.push(novoTreinador);
    return novoTreinador;
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };
