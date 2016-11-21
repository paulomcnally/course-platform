'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    video: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Course;
};
