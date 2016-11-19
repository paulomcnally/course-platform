const debug = require('debug')('app:middleware:admin');

module.exports = function(req, res, next) {
  if (req.session.user && req.session.user.user_type === 1) {
    debug('You are allowed to be here.', req.originalUrl);
    next();
  } else {
    debug('You are not allowed to be here.', req.originalUrl);
    res.redirect('/');
  }
}
