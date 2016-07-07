var app = require('express');
var router = app.Router();
var Auth = require('../Repository/Auth.js')

router.route('/')
.get(function (req, res, next){
	res.render('login');
})
.post(function (req, res, next){
	if(Auth.user(req.body)){
		req.session.authenticated = true;
		req.session.user = req.body.username;
		res.redirect('/');
	}
	else{
		res.redirect('/login');
	}
});
module.exports = router;
