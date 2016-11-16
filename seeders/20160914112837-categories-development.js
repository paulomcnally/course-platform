'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        id: 16,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Desarrollo web',
        slug: 'web-development',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 17,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Aplicaciones móviles',
        slug: 'mobile-apps',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 18,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Lenguajes de programación',
        slug: 'programming-languages',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 19,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Desarrollo de videojuegos',
        slug: 'game-development',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 20,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Bases de datos',
        slug: 'databases',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 21,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Testeo de software',
        slug: 'software-testing',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 22,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Ingeniería de software',
        slug: 'software-engineering',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 23,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Herramientas de desarrollo',
        slug: 'development-tools',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      },
      {
        id: 24,
        icon: 'fa-code',
        iconType: 'fontawesome',
        name: 'Comercio electrónico',
        slug: 'e-commerce',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 1
      }
    ], {hooks: true});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
