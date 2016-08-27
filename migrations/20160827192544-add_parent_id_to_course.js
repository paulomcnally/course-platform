'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Courses',
      'parent_id',
      Sequelize.INTEGER
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Courses', 'parent_id');
  }
};
