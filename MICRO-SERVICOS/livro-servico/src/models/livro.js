'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {}
  Livro.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    disponibilidade: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};
