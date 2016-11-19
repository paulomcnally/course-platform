'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    encrypted_password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    user_type: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isInt: true
      }
    },
    reset_password_token: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    verification_token: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    active: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true
      }
    },
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    indexes: [
      {
        unique: true,
        fields: [
          'email'
        ]
      }
    ]
  });
  return User;
};
