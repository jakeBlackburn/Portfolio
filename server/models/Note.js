const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  overview: {
    type: String
  },
  text: {
    type: Array,
  }
})

module.exports = mongoose.model('Note', NoteSchema)
