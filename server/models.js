const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
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
  },
  urls: {
    type: Array,
  }

},
{
  versionKey: false 
})

module.exports = mongoose.model('Project', ProjectSchema)
