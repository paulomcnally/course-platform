const middlewareCategories = require('../../../../middleware/categories');
const middlewareAuth = require('../../../../middleware/auth');

module.exports = function (router) {
  router.get('/', middlewareCategories, middlewareAuth, function (req, res) {
    res.render('admin/courses/index');
  });
}
