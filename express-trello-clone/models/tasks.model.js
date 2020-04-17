const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: Demical128
  },
  due_date: {
    type: Date
  },
  label: {
    type: String,
    default: ''
  },
  list_id: [ListsSchema],
});

module.exports = mongoose.model('Tasks', TasksSchema);