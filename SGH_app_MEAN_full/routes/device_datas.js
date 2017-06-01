const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Data = require('../models/device_data.js');

//create device
router.post('/', (req,res,next) =>{
	let current_date = new Date();

	//check posted data!!!

	let newData = new Data({
		device: req.body.device_id,
		data: req.body.data,
		date: current_date
	});

	Data.addData(newData, (err,data) =>{
		if(err){
			res.json({success: false, msg:'Failed to post data'});
			console.log(err);
		}
		else{
			res.json({success: true, msg:'Data stored'});
		}
	});
});

//get devices list by project id
router.get('/:device_id', (req,res,next) =>{
	console.log("device="+req.params.device_id);
	const device = req.params.device_id;
	Data.getDevicesByDeviceId(device, (err, data) =>{
		if(err) throw err;
		if(data){
			console.log(data);
			res.json({data: data});
		}else{
			console.log("Unknown error");
		}
	});
})

module.exports = router;