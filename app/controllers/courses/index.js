const debug = require('debug')('app:controller:categories');
const middlewareCategories = require('../../../middleware/categories');
const middlewareAuth = require('../../../middleware/auth');
const models = require('../../../models');

module.exports = function (router) {
  router.get('/:slug', middlewareCategories, middlewareAuth, function (req, res) {
    var categories = models.cacher('Category')
    .ttl(models.ttl);

    categories.findOne({
      where: {
        slug: req.params.slug,
        active: true
      },
    })
    .then(function(category) {
      debug('Cache Hit: %s', category.cacheHit);
      res.render('courses/index', {
        category: category
      });
    });
  });
};
