const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const UserSchema = mongoose.Schema({
	name: {
		type: String
	},
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	chart_id:{
		type: String
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

//find user by id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}
//find user by username
module.exports.getUserByUsername = function(username, callback){
	const query = {username: username}
	User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt)=>{
		bcrypt.hash(newUser.password, salt, (err, hash)=>{
			if(err) return;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}
//check user for existence
module.exports.exist = function(username, callback){
	const query = {username: username}
	User.findOne(query, callback);
}

module.exports.addChartId = function(username, chart_id, callback){
	User.findOneAndUpdate(
        {username: username},
        { $set: {"chart_id": chart_id}},
        function(err,message) {
          console.info( message );
          callback(err);
        }
      );
}
//compare passwords
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
		if(err) throw err;
		callback(null, isMatch);
	});
}