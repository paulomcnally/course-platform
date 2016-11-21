const middlewareCategories = require('../../../../middleware/categories');
const middlewareAuth = require('../../../../middleware/auth');
const middlewareAdmin = require('../../../../middleware/admin');
const models = require('../../../../models');

module.exports = function (router) {
  router.get('/', middlewareCategories, middlewareAuth, middlewareAdmin, function (req, res) {
    res.render('admin/courses/index');
  });

  // create new course
  router.post('/', middlewareCategories, middlewareAuth, middlewareAdmin, function (req, res) {
    req.checkBody('title', res.__('course.title.empty')).notEmpty();
    req.checkBody('short_description', res.__('course.short_description.empty')).notEmpty();
    req.checkBody('description', res.__('course.description.empty')).notEmpty();
    req.checkBody('thumbnail', res.__('course.thumbnail.empty')).notEmpty();
    req.checkBody('video', res.__('course.video.empty')).notEmpty();
    req.checkBody('level', res.__('course.level.empty')).notEmpty();
    req.checkBody('category_id', res.__('course.category_id.empty')).notEmpty().isInt();
    req.checkBody('sub_category_id', res.__('course.sub_category_id.empty')).notEmpty().isInt();

    // instance validationErrors
    var validationErrors = req.validationErrors();

    if (validationErrors) {
      // show first error validation
      res.status(409).json(validationErrors.shift());
    } else {

      models.Course.create({
          title: req.body.title,
          shortDescription: req.body.short_description,
          description: req.body.description,
          level: req.body.level,
          thumbnail: req.body.thumbnail,
          video: req.body.video,
          categoryId: req.body.category_id,
          subCategoryId: req.body.sub_category_id,
          active: false
      }).then(function(course) {
        res.json({
          id: course.id
        });
      }).catch(function(errors) {
        // error on database validation/invalid
        var error = {
          error: {
            param: errors,
            message: errors.message
          }
        };
        res.status(409).json(error);
      });
    }
  });
}
