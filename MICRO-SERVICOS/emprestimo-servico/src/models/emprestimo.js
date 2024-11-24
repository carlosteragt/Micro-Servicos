'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Emprestimo extends Model {}
  Emprestimo.init({
    usuarioId: DataTypes.INTEGER,
    livroId: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Emprestimo',
  });
  return Emprestimo;
};
