const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user_board_id: [UserBoardSchema],
});

module.exports = mongoose.model('Boards', BoardsSchema);