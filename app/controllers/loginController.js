var app = require('express');
var router = app.Router();
var User = require('../Models/User.js')

router.route('/')
.get(function (req, res, next){
	res.render('login');
})
.post(function (req, res, next){
	if(User.auth(req.body.username, req.body.password)){
		req.session.authenticated = true;
		req.session.user = req.body.username;
	}
	else{
		res.redirect('/login',{message:"Inccorect Username or password"});
	}
});
module.exports = router;
