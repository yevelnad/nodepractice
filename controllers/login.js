var app = require('express');
var router = app.Router();

router.route('/')
.get(function (req, res, next){
	res.render('login');
});
module.exports = router;