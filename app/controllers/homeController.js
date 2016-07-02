var app = require('express');
var router = app.Router();

router.route('/')
.get(function(req, res, next){
	res.render('index');
})

module.exports = router;
