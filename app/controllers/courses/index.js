const debug = require('debug')('app:controller:courses');
const middlewareCourses = require('../../../middleware/courses');
const middlewareAuth = require('../../../middleware/auth');
const models = require('../../../models');

module.exports = function (router) {
  router.get('/:slug', middlewareCourses, middlewareAuth, function (req, res) {
    var courses = models.cacher('Course')
    .ttl(models.ttl);

    courses.findOne({
      where: {
        slug: req.params.slug,
        active: true
      },
    })
    .then(function(course) {
      debug('Cache Hit: %s', courses.cacheHit);
      res.render('courses/index', {
        course: course
      });
    });
  });
};
