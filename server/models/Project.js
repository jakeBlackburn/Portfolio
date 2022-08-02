const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  skills: {
    type: Array,
  }

})

module.exports = mongoose.model('Project', ProjectSchema)
