const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

//connect db
mongoose.connect(config.database);
//database connected
mongoose.connection.on('connected', ()=>{
	console.log('Connected to database '+config.database);
})
//database connection failed
mongoose.connection.on('error', (err)=>{
	console.log('Database error: '+err);
})

const app = express();

const users = require('./routes/users');
const projects = require('./routes/projects');
const devices = require('./routes/devices');
const data = require('./routes/device_datas');

//port number
const port = 3000;

//CORS middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//passport midleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/projects', projects);
app.use('/devices', devices);
app.use('/device_data', data);

//Index route
app.get('/', (req,res)=>{
	res.send('Invalid');
});

/*app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/index.html'));
});*/

//start server
app.listen(port, () =>{
	console.log('Server started on port '+port);
});