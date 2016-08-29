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
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Negocios',
        slug: 'business',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Informática y software',
        slug: 'it-and-software',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Productividad en la oficina',
        slug: 'office-productivity',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Desarrollo personal',
        slug: 'personal-development',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Diseño',
        slug: 'design',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Marketing',
        slug: 'marketing',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Estilo de vida',
        slug: 'lifestyle',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Fotografía',
        slug: 'photography',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Salud y fitness',
        slug: 'health-and-fitness',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Formación de profesorado',
        slug: 'teacher-training',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Música',
        slug: 'music',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Estudios académicos',
        slug: 'academics',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Idioma',
        slug: 'language',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        parent_id: 0
      },
      {
        icon: 'fa-code',
        icon_type: 'fontawesome',
        name: 'Preparación para exámenes oficiales',
        slug: 'test-prep',
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
