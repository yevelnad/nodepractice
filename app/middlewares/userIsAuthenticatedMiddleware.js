var app = require('express');
var router = app.Router();


router.use(function(req, res, next){ //you can change it to router.get or router.post
  if(req.session.authenticated === true){
    res.redirect('/');
  }
  next();
});

module.exports = router;
