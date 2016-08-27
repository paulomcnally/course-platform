const middlewareCourses = require('../../middleware/courses');

module.exports = function (router) {
  router.get('/', middlewareCourses, function (req, res) {
    res.render('index');
  });
};
