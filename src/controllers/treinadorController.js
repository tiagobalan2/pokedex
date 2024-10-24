const { getTreinadores, getTreinadorById, createTreinador } = require('./treinador');

const listarTreinadores = (req, res) => {
    const treinadores = getTreinadores();
    res.json(treinadores);
};

const buscarTreinador = (req, res) => {
    const id = req.params.id;
    const treinador = getTreinadorById(id);
    
    if (treinador) {
        res.json(treinador);
    } else {
        res.status(404).json({ mensagem: 'Treinador não encontrado.' });
    }
};

const cadastrarTreinador = (req, res) => {
    const { nome, pokemons } = req.body;
    
    if (!nome || !Array.isArray(pokemons) || pokemons.length === 0) {
        return res.status(400).json({ mensagem: 'Nome e uma lista de pokémons são obrigatórios.' });
    }

    const novoTreinador = createTreinador(nome, pokemons);
    res.status(201).json(novoTreinador);
};

module.exports = { listarTreinadores, buscarTreinador, cadastrarTreinador };
