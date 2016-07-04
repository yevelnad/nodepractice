var app = require('express');
var router = app.Router();


router.use(function(req, res, next){ 
  if(req.session.authenticated === true){
    res.redirect('/');
  }
  next();
});

module.exports = router;
