const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Project = require('../models/project')

//create project
router.post('/', (req,res,next) =>{
	let current_date = new Date();
	let newProject = new Project({
		title: req.body.title,
		owner: req.body.owner,
		date: current_date,
		devices: []
	});

	Project.addProject(newProject, (err,project) =>{
		if(err){
			res.json({success: false, msg:'Failed to create new project'});
		}
		else{
			res.json({success: true, msg:'New project created'});
		}
	});
});

//add devices to the project
router.post('/devices', (req,res,next) =>{
	let project_id = req.body.project_id;
	let device_id = req.body.device_id;

	Project.addDevice(project_id, device_id, (err,project) =>{
		if(err){
			res.json({success: false, msg:'Failed to add new device'});
		}
		else{
			res.json({success: true, msg:'New device added to the project'});
		}
	});
});

//get projects list by owner id
router.get('/:user_id', (req,res,next) =>{
	console.log("owner="+req.params.user_id);
	const owner = req.params.user_id;
	Project.getProjectByOwnerId(owner, (err, projects) =>{
		if(err) throw err;
		if(projects){
			console.log(projects);
			res.json({projects: projects});
		}else{
			console.log("Unknown error");
		}
	});
})

module.exports = router;