const models = require('../models');
const debug = require('debug')('app:middleware:categories');

module.exports = function(req, res, next) {
  var categories = models.cacher('Category')
  .ttl(models.ttl);

  categories.findAll({
    where: {
      active: true,
      parentId: 0
    },
  })
  .then(function(result) {
    res.locals.categories = result;
    debug('Cache Hit: %s', categories.cacheHit);
    next();
  });
}
