const middlewareCategories = require('../../../../middleware/categories');
const middlewareAuth = require('../../../../middleware/auth');
const middlewareAdmin = require('../../../../middleware/admin');

module.exports = function (router) {
  router.get('/', middlewareCategories, middlewareAuth, middlewareAdmin, function (req, res) {
    res.render('admin/courses/index');
  });
}
