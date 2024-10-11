const {Model, DataTypes} = require('sequelize');

class Pokemon extends Model {}

module.exports = (sequelize) => {
    Pokemon.init({
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Altura: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Peso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NivelDePoder: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize, 
        modelName: 'Pokemon',
        tableName: 'pokemons',
        timestamps: true,
    });

    return Pokemon;
}