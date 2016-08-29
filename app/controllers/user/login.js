const randomstring = require('randomstring');
const bcrypt = require('bcryptjs');
const models = require('../../../models');

module.exports = function (router) {
  // auth
  router.post('/', function (req, res) {
    // validate post params
    req.checkBody('sign_in_email', res.__('user.email.empty')).notEmpty();
    req.checkBody('sign_in_password', res.__('user.password.empty')).notEmpty();

    // instance validationErrors
    var validationErrors = req.validationErrors();

    if (validationErrors) {
      // show first error validation
      res.status(409).json(validationErrors.shift());
    } else {
      // check if email exists
      models.User.findOne({
        where: {
          email: req.body.sign_in_email
        }
      }).then(function(user) {
        // if exists show exists message
        if (user !== null) {
          if (bcrypt.compareSync(req.body.sign_in_password, user.encrypted_password)) {
            req.session.user = {
              id: user.id,
              email: user.email
            };
            res.json(req.session.user);
          } else {
            res.status(401).json({
              error: {
                message: res.__('user.password.invalid')
              }
            });
          }
        } else {
          res.status(401).json({
            error: {
              message: res.__('user.email.invalid')
            }
          });
        }
      });
    }
  });
};
