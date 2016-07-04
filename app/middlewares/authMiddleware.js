var app = require('express');
var router = app.Router();

router.use(function(req, res, next){
	if (req.session.authenticated) {
		next();
		}
	else{
		res.redirect('/');
	}
});

module.exports = router;
