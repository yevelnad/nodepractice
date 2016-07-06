var app = require('express');
var router = app.Router();


router.use(function(req, res, next){
  if(req.session.authenticated){
      res.redirect('/');
    }
  else{
    next();
  }
});

module.exports = router;
