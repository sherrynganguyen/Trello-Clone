const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  board_id: [BoardsSchema],
});

module.exports = mongoose.model('Lists', ListsSchema);