const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Device = require('../models/device');

//create device
router.post('/', (req,res,next) =>{
	let current_date = new Date();
	let newDevice = new Device({
		name: req.body.name,
		project: req.body.project,
		date: current_date,
		sensors: [],
		actuators: []
	});

	Device.addDevice(newDevice, (err,device) =>{
		if(err){
			res.json({success: false, msg:'Failed to create new device'});
			console.log(err);
		}
		else{
			res.json({success: true, msg:'New device created'});
		}
	});
});

//add sensor
router.post('/sensors', (req,res,next) =>{
	let device_id = req.body.device_id;
	let current_date = new Date();
	let newSensor = new Device.Sensor({
		name: req.body.name,
		date: current_date,
		value: req.body.value,
		prefix: req.body.prefix
	});
	
	Device.addSensor(device_id, newSensor,  (err,device) =>{
		if(err){
			console.log(err);
			res.json({success: false, msg:'Failed to add new sensor'});
		}
		else{
			res.json({success: true, msg:'New sensor added to the device'});
		}
	});
});

//add actuator
router.post('/actuators', (req,res,next) =>{
	let device_id = req.body.device_id;
	let current_date = new Date();
	let newActuator = new Device.Actuator({
		name: req.body.name,
		date: current_date,
		states: req.body.states
	});
	
	Device.addActuator(device_id, newActuator,  (err,device) =>{
		if(err){
			res.json({success: false, msg:'Failed to add new actuator'});
		}
		else{
			res.json({success: true, msg:'New actuator added to the device'});
		}
	});
});

//get devices list by project id
router.get('/:project_id', (req,res,next) =>{
	console.log("project="+req.params.project_id);
	const project = req.params.project_id;
	Device.getDevicesByProjectId(project, (err, devices) =>{
		if(err) throw err;
		if(devices){
			console.log(devices);
			res.json({devices: devices});
		}else{
			console.log("Unknown error");
		}
	});
/*
	//temporary function
	router.post('/data', (req,res,next) =>{
		let current_date = new Date();
		let newData = {
			dev_id: req.body.device, 
			temp: req.body.temp,
			hum: req.body.hum,
			soil: req.body.soil,
			light: req.body.light,
			led: req.body.led,
			water: req.body.water,
			date: current_date
		};

		/*Data.addDeviceData(newData, (err,device) =>{
			if(err){
				res.json({success: false, msg:'Failed to create new device'});
				console.log(err);
			}
			else{
				res.json({success: true, msg:'New device created'});
			}
		});
	});*/
})

module.exports = router;