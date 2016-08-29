const debug = require('debug')('app:middleware:auth');

module.exports = function(req, res, next) {
  if (req.session.user) {
    res.locals.auth = {
      user: req.session.user
    };
    debug('User id: %s', req.session.user.id);
    debug('User email: %s', req.session.user.email);
  }

  debug('Is logged in: %s', req.session.hasOwnProperty('user'));

  next();
}
