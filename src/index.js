const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./database')

const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(cors());
app.use(morgan('dev')); //get requests in console
app.use(express.json()); //check all incoming data uses json format

//Routes
app.use('/api/tasks', require('./routes/task.routes')); //get the routes on file task.routes

//Static files
console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});