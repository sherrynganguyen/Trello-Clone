const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Number,
  first_name: {type: String, default: ''},
  last_name: {type: String, default: ''},
  email: String,
  password: String,
});

module.exports = mongoose.model('User', UserSchema);