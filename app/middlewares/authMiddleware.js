var app = require('express');
var router = app.Router();

router.get('/', function(req, res, next){
	if (req.session.authenticated === true ) {
		res.redirect('/register');
	}
	next();
});

module.exports = router;
