var User = require('../Models/User.js');
var Auth = exports = module.exports = {};

Auth.user = function user(body){
	var result = User.find(body.username, body.password);
	if(result){
		return true;
	}
	else{
		return false;
	}

}