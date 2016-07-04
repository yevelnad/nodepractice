var app = require('express');
var router = app.Router();
/*
im lazy so i created this code to autoload Controllers;
*/
var controller = function(controller){
		return require('../controllers/'+controller+'Controller');
	}
var middleware = function(controller){
		return require('../middleware/'+middleware+'Middleware');
}
/*
/ corresponds to route mysite.com/api/
*/
router.all('/user/search', function(req, res, next){

});

module.exports = router;
