const debug = require('debug')('app:middleware:auth');

module.exports = function(req, res, next) {
  if (req.session.user) {
    res.locals.auth = {
      user: req.session.user
    };

    switch (req.session.user.user_type) {
      case 1:
        res.locals.auth.isAdmin = true;
        res.locals.auth.isUser = false;
        break;
      case 3:
        res.locals.auth.isAdmin = false;
        res.locals.auth.isUser = true;
        break;
      default:

    }

    debug('User id: %s', req.session.user.id);
    debug('User email: %s', req.session.user.email);
  }

  debug('Is logged in: %s', req.session.hasOwnProperty('user'));

  next();
}
