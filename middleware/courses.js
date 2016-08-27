const models = require('../models');
const debug = require('debug')('app:middleware:courses');

module.exports = function(req, res, next) {
  var courses = models.cacher('Course')
  .ttl(models.ttl);

  courses.findAll({
    where: {
      active: true,
      parent_id: 0
    },
  })
  .then(function(result) {
    res.locals.courses = result;
    debug('Cache Hit %s', courses.cacheHit);
    next();
  });
}
