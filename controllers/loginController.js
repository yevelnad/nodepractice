var app = require('express');
var router = app.Router();

router.route('/')
.get(function (req, res, next){
	res.render('login');
})
.post(function (req, res, next){
	res.json(req.body.username);
});
module.exports = router;
