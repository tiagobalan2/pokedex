const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');
const treinadorRoutes = require('./routes/treinadorRoutes'); // Importar as rotas dos treinadores
const path = require('path'); // Adicione esta linha para importar o módulo path

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Usar as rotas
app.use('/pokemons', pokemonRoutes); // Prefixo para rotas de pokémons
app.use('/treinadores', treinadorRoutes); // Prefixo para rotas de treinadores

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
