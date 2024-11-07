const { getTreinadores, getTreinadorById, createTreinador } = require('../models/treinador');

const listarTreinadores = (req, res) => {
    const treinadores = getTreinadores();
    res.render('treinadores', { treinadores });
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
    const { nome, pokemons, imagem } = req.body; // Acesse o corpo da requisição

    // Verificar se o nome está presente e se pokemons não está vazio
    if (!nome || !pokemons) {
        return res.status(400).json({ mensagem: 'Nome e Pokémons são obrigatórios.' });
    }

    // Agora podemos criar o treinador
    const novoTreinador = createTreinador(nome, pokemons, imagem);
    res.redirect('/treinadores');
};

module.exports = { listarTreinadores, buscarTreinador, cadastrarTreinador };
