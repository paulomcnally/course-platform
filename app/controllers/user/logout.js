module.exports = function (router) {
  // logout
  router.get('/', function (req, res) {
    if (req.session.user) {
      req.session.destroy(function(err){
        if (!err) {
          res.redirect('/');
        }
      });
    }
  });
};
