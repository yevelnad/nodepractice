var app = require('express');
var router = app.Router();
/*
im lazy so i created this code to autoload Controllers;
*/
var controller = function(controller){
		return require('../controllers/'+controller+'Controller');
	}
var middleware = function(middleware){
		return require('../middlewares/'+middleware+'Middleware');
	}

router.use('/', middleware('home'), controller('home'));
router.use('/login', controller('login'));


module.exports = router;
