const middlewareCourses = require('../../../../middleware/courses');
const middlewareAuth = require('../../../../middleware/auth');

module.exports = function (router) {
  router.get('/', middlewareCourses, middlewareAuth, function (req, res) {
    res.render('admin/courses/index');
  });
}
