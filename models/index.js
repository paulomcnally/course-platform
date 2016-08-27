'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};
var initCache = require('sequelize-cacher');
var redis = require('redis');

// setup redis client
if (config.redis.use_env_variable) {
  var cacheEngine = redis.createClient(process.env[config.redis.use_env_variable]);
} else {
  var cacheEngine = redis.createClient(config.redis.port, config.redis.host);
}

// setup sequelize client
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// init cacher
var cacher = initCache(sequelize, cacheEngine);

fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.cacher = cacher;
db.ttl = 86400;

module.exports = db;
