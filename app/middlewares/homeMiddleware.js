var app = require('express');
var router = app.Router();

router.get(function(req, res, next){
	if (req.method == 'GET' ) {
		next();
	}
	next();
});

module.exports = router;
