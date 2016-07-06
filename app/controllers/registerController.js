var app = require('express');
var router = app.Router();
var low = require('lowdb');
var User = require('../Models/User.js');


router.route('/')
.get(function(req, res){
	res.render('register');
})
.post(function(req, res){ //
	if(User.create(req.body.username, req.body.password)){
		res.location('/register');
	}
	else{
		res.redirect('/register');
	}
})
module.exports = router;
