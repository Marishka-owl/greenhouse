const mongoose = require('mongoose');
const config = require('../config/database');

const ObjectId = mongoose.Schema.Types.ObjectId;

//project schema
const DeviceDataSchema = mongoose.Schema({
	device: {
		type: ObjectId
	},
	date: {
		type: Date
	},
	data: [{name: String, value: String}]
});

const Data = module.exports = mongoose.model('Data', DeviceDataSchema);

//find data by id
module.exports.getDataById = function(id, callback){
	Data.findById(id, callback);
}

//find data by device
module.exports.getDevicesByDeviceId = function(device_id, callback){;
	const query = {'device': device_id};
	Data.find(query, callback);
}

module.exports.addData = function(newData, callback){
	newData.save(callback);
}