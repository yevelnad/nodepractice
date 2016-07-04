var app = require('express');
var router = app.Router();

router.route('/')
.get(function(req, res){
	res.render('register');
})
.post(function(req, res){ //
	res.send();
})
module.exports = router;
