'use strict';

var randomstring = require('randomstring');
var bcrypt = require('bcryptjs');

module.exports = {
  up: function (queryInterface, Sequelize) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync('_2G6_jhgMD*KR', salt);
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Paulo Antonio McNally Zambrana',
        email: 'paulo.mcnally@chocoyolabs.com',
        encrypted_password: hash,
        user_type: 1,
        reset_password_token: randomstring.generate(120),
        verification_token: randomstring.generate(120),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
