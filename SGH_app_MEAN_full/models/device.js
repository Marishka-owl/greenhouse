const mongoose = require('mongoose');
const config = require('../config/database');

const ObjectId = mongoose.Schema.Types.ObjectId;

//sensor schema
const SensorSchema = mongoose.Schema({
	name: {
		type: String
	},
	value: {
		type: String
	},
	date: {
		type: Date
	},
	prefix: {
		type: String
	}
});

//actuator schema
const ActuatorSchema = mongoose.Schema({
	name: {
		type: String
	},
	date: {
		type: Date
	},
	states: [String]
});

//project schema
const DeviceSchema = mongoose.Schema({
	name: {
		type: String
	},
	project: {
		type: ObjectId
	},
	date: {
		type: Date
	},
	sensors: [SensorSchema],
	actuators: [ActuatorSchema]
});

const Device = module.exports = mongoose.model('Device', DeviceSchema);

//additional schemas
module.exports.Sensor = mongoose.model('Sensor', SensorSchema);
module.exports.Actuator = mongoose.model('Actuator', ActuatorSchema);

//find project by id
module.exports.getDeviceById = function(id, callback){
	Device.findById(id, callback);
}
//find project by title
module.exports.getDeviceByName = function(name, callback){
	const query = {name: name}
	Device.findOne(query, callback);
}

//find project by owner
module.exports.getDevicesByProjectId = function(project_id, callback){;
	const query = {'project': project_id};
	Device.find(query, callback);
}

module.exports.addDevice = function(newDevice, callback){
	newDevice.save(callback);
}

module.exports.addSensor = function(device_id, sensor, callback){
	Device.findByIdAndUpdate(
        device_id,
        { "$push": { "sensors": sensor } },
        function(err,message) {
          console.info( message );
          callback(err);
        }
      );
}
module.exports.addActuator = function(device_id, actuator, callback){
	Device.findByIdAndUpdate(
        device_id,
        { "$push": { "actuator": actuator } },
        function(err,message) {
          console.info( message );
          callback(err);
        }
      );
}