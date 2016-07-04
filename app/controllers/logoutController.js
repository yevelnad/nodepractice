var app = require('express');
var router = app.Router();

router.route('/')
.get(function(req, res, next){
	req.session.authenticated = false;
	res.redirect('/login');
})

module.exports = router;
