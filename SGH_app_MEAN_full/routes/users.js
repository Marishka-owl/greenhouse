const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user')

//register
router.post('/register', (req,res,next) =>{
	User.exist(req.body.username, (err, userExist)=>{
		if(err){
			res.json({success: false, msg: err});
		}
		if(userExist){
			res.json({success: false, msg:'User with this login is already registered'});
		}else{
			let newUser = new User({
				name: req.body.name,
				username: req.body.username,
				password: req.body.password,
				chart_id: '0'
			});

			User.addUser(newUser, (err,user) =>{
				if(err){
					res.json({success: false, msg:'Failed to register user'});
				}
				else{
					res.json({success: true, msg:'User registered'});
				}
			});
		}
	});
});

//authenticate
router.post('/authenticate', (req,res,next) =>{
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) =>{
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}

		User.comparePassword(password, user.password, (err, isMatch)=>{
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign(user, config.secret, {
					expiresIn: 604800 //1 week in seconds
				});

				res.json({
					success: true,
					token: 'JWT '+token,
					user:{
						id: user._id,
						name: user.name,
						username: user.username,
						chart_id: user.chart_id
					}
				});
			}else{
				return res.json({success: false, msg: 'Wrong passport'});
			}
		});
	});
});

//add chart_id
router.post('/add_chartId', (req,res,next) =>{
	let chart_id = req.body.chart_id;
	let username = req.body.username;

	User.addChartId(username, chart_id, (err,user) =>{
		if(err){
			res.json({success: false, msg:'Failed to add chart_id'});
		}
		else{
			res.json({success: true, msg:'Chart_id was added successfully'});
		}
	});
});

//profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res,next) =>{
	res.json({user: req.user});
})

module.exports = router;