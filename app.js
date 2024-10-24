const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');
const treinadorRoutes = require('./routes/treinadorRoutes'); // Importar as rotas dos treinadores

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Usar as rotas
app.use('/pokemons', pokemonRoutes); // Prefixo para rotas de pokémons
app.use('/treinadores', treinadorRoutes); // Prefixo para rotas de treinadores

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
