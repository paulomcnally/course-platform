'use strict';
module.exports = function(sequelize, DataTypes) {
  var Code = sequelize.define('Code', {
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    max: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    indexes: [
      {
        unique: true,
        fields: [
          'value'
        ]
      }
    ]
  });
  return Code;
};
