var low = require('lowdb');
var db = low('app/Database/User.json');
var _ = require('lodash');

db.defaults({users:[]}).value();
users = db.get('users');
var Users = exports = module.exports = {};

Users.create = function create(username,password){
	var check = users.find({username: username}).isEmpty().value();
	if(check){
		db.get('users').push({username: username, password: password}).value();
		return true;
	}
	else{
		return false;
	}
	
}

Users.auth = function auth(username,password){
	return !db.get('users').find({username: username, password: password}).isEmpty().value();

} 
