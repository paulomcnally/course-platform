const debug = require('debug')('app:controller:admin:categories');
const middlewareCategories = require('../../../../middleware/categories');
const middlewareAuth = require('../../../../middleware/auth');
const middlewareAdmin = require('../../../../middleware/admin');
const models = require('../../../../models');

module.exports = function (router) {
  router.get('/', middlewareCategories, middlewareAuth, middlewareAdmin, function (req, res) {
    res.render('admin/courses/category');
  });

  router.get('/:categorySlug', middlewareCategories, middlewareAuth, middlewareAdmin, function (req, res) {
    models.Category.findOne({
      where: {
        slug: req.params.categorySlug
      }
    }).then(function(category) {
      models.Category.findAll({
        where: {
          parentId: category.id
        }
      }).then(function(subCategories) {
        res.render('admin/courses/sub-category', {
          category: category,
          subCategories: subCategories,
          categorySlug: req.params.categorySlug
        });
      })

    });
  });

  router.get('/:categorySlug/:subCategorySlug', middlewareCategories, middlewareAuth, middlewareAdmin, function (req, res) {
    models.Category.findOne({
      where: {
        slug: req.params.categorySlug
      }
    }).then(function(category) {
      models.Category.findOne({
        where: {
          slug: req.params.subCategorySlug
        }
      }).then(function(subCategory) {
        res.render('admin/courses/new', {
          category: category,
          subCategory: subCategory,
          categorySlug: req.params.categorySlug,
          subCategorySlug: req.params.subCategorySlug
        });
      })
    });
  });
};
