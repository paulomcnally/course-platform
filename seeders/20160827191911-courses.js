'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Courses', [
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Desarrollo',
        slug: 'development',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
