const TRELLO_PASSWORD = process.env.TRELLO_PASSWORD;
const mongoose = require('mongoose');

const Users = require('./users.model');

// Database Name
const dbName = 'trello-clone';
 
// Connection URL
const url = `mongodb+srv://trello:${TRELLO_PASSWORD}@cluster0-onasa.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Use connect method to connect to the server
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  (!err) ? console.log("Connected successfully to database") : console.log('Error connecting to database');
});