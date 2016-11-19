'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Codes', [{
      name: 'Programa de Talentos UCA Digital',
      value: 'PTUD_QTO09E',
      max: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Codes', null, {});
  }
};
