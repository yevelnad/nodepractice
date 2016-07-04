var app = require('express');
var router = app.Router();

router.route('/')
.get(function (req, res, next){
	res.render('login');
})
.post(function (req, res, next){
	if(req.body.username === 'dan' && req.body.password === 'dan' ){
		req.session.authenticated = true;
		req.session.user = req.body.username;
		res.redirect('/');
		res.end();
	}
	res.redirect('/login');
});
module.exports = router;
