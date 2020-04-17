const mongoose = require('mongoose');
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'trello-clone';
 
// Use connect method to connect to the server
mongoose.connect(url, function(err, client) {
  // assert.equal(null, err);
  console.log("Connected successfully to server");
 
  // const db = client.db(dbName);
  // client.close();
});