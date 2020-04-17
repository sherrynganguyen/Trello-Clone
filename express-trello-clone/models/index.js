const mongoose = require('mongoose');

const Users = require('./users.model');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'trello-clone';
 
// Use connect method to connect to the server
mongoose.connect(url + "/" + dbName, { useNewUrlParser: true }, (err) => {
  (!err) ? console.log("Connected successfully to database") : console.log('Error connecting to database');
});