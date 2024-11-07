const treinadores = [
    
];

const getTreinadores = () => treinadores;

const getTreinadorById = (id) => treinadores.find(t => t.id === parseInt(id));

const createTreinador = (nome, pokemonsStr, imagem) => {
    const pokemonsArray = pokemonsStr.split(',').map(p => ({ nome: p.trim(), tipo: 'Desconhecido' })); // Cria um array de objetos Pokémon
    const novoTreinador = {
        id: treinadores.length + 1,
        nome,
        pokemons: pokemonsArray,
        imagem // A imagem agora é passada corretamente
    };
    treinadores.push(novoTreinador);
    return novoTreinador;
};

const TreinadorModel = { getTreinadores, getTreinadorById, createTreinador };

module.exports = TreinadorModel;
