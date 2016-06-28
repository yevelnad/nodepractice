var app = require('express');
var router = app.Router();
/*
im lazy so i created this code to autoload this Controllers;
*/
var controller = function(controller){
		return require('../controllers/'+controller); 
	}
router.use('/', controller('home'));
router.use('/login', controller('login'));


module.exports = router;
