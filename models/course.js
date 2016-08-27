'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    icon: DataTypes.STRING,
    icon_type: DataTypes.STRING,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    parent_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Course;
};
