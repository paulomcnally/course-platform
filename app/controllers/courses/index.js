const middlewareCourses = require('../../../middleware/courses');
const middlewareAuth = require('../../../middleware/auth');
const models = require('../../../models');

module.exports = function (router) {
  router.get('/:slug', middlewareCourses, middlewareAuth, function (req, res) {

    // find course based slug
    models.Course.findOne({
      where: {
        slug: req.params.slug
      }
    }).then(function(course) {
      res.render('courses/index', {
        course: course
      });
    });
  });
};
