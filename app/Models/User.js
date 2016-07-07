var low = require('lowdb');
var db = low('app/Database/User.json');

db.defaults({users:[]}).value();
users = db.get('users');
var User = exports = module.exports = {};

User.create = function create(username,password){
	var check = users.find({username: username}).isEmpty().value();
	if(check){
		db.get('users').push({username: username, password: password}).value();
		return true;
	}
	else{
		return false;
	}
	
}

User.find = function auth(username,password){
	return !db.get('users').find({username: username, password: password}).isEmpty().value();

}

