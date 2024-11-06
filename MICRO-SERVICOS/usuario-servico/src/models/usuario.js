'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nascimento: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
