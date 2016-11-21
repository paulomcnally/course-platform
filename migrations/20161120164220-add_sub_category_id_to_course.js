'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Courses',
      'subCategoryId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Courses', 'subCategoryId');
  }
};
