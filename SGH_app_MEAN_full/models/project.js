const mongoose = require('mongoose');
const config = require('../config/database');

const ObjectId = mongoose.Schema.Types.ObjectId;

//project schema
const ProjectSchema = mongoose.Schema({
	title: {
		type: String
	},
	owner: {
		type: ObjectId
	},
	date: {
		type: Date
	},
	devices: [ObjectId]
});

const Project = module.exports = mongoose.model('Project', ProjectSchema);

//find project by id
module.exports.getProjectById = function(id, callback){
	Project.findById(id, callback);
}
//find project by title
module.exports.getProjectByTitle = function(title, callback){
	const query = {title: title}
	Project.findOne(query, callback);
}

//find project by owner
module.exports.getProjectByOwnerId = function(owner_id, callback){;
	const query = {'owner': owner_id};
	Project.find(query, callback);
}

module.exports.addProject = function(newProject, callback){
	newProject.save(callback);
}

module.exports.addDevice = function(project_id, device, callback){
	Project.findByIdAndUpdate(
        project_id,
        { "$push": { "devices": device } },
        function(err,message) {
          console.info( message );
          callback(err);
        }
      );
}