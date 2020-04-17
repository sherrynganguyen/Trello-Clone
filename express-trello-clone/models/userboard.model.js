const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserBoardSchema = new Schema({
  user_id: [UsersSchema],
  board_id: [BoardsSchema]
});

module.exports = mongoose.model('UserBoard', UserBoardSchema);