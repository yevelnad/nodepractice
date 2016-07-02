var app = require('express');
var router = app.Router();
/*
im lazy so i created this code to autoload Controllers;
*/
var controller = function(controller){
		return require('../controllers/'+controller);
	}
router.all('/', function(req, res, next){
    
});

module.exports = router;
