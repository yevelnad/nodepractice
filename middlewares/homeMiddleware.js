var app = require('express');
var router = app.Router();

router.get('/', function(req, res, next){
	if (req.method == 'GET' ) {
		res.send(req.method);
	}
	next();
});

module.exports = router;
