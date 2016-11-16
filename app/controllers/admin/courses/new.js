const debug = require('debug')('app:controller:admin:courses');
const middlewareCourses = require('../../../../middleware/courses');
const middlewareAuth = require('../../../../middleware/auth');
const models = require('../../../../models');

module.exports = function (router) {
  router.get('/', middlewareCourses, middlewareAuth, function (req, res) {
    res.render('admin/courses/category');
  });

  router.get('/:categorySlug', middlewareCourses, middlewareAuth, function (req, res) {
    models.Course.findOne({
      where: {
        slug: req.params.categorySlug
      }
    }).then(function(course) {
      models.Course.findAll({
        where: {
          parent_id: course.id
        }
      }).then(function(subCourses) {
        res.render('admin/courses/sub-category', {
          course: course,
          subCourses: subCourses,
          categorySlug: req.params.categorySlug
        });
      })

    });
  });

  router.get('/:categorySlug/:subCategorySlug', middlewareCourses, middlewareAuth, function (req, res) {
    models.Course.findOne({
      where: {
        slug: req.params.categorySlug
      }
    }).then(function(course) {
      models.Course.findOne({
        where: {
          slug: req.params.subCategorySlug
        }
      }).then(function(subCourse) {
        res.render('admin/courses/new', {
          course: course,
          subCourse: subCourse,
          categorySlug: req.params.categorySlug,
          subCategorySlug: req.params.subCategorySlug
        });
      })
    });
  });
};
