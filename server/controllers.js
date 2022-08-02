const Project = require('./models/Project')
const Note = require('./models/Note')
const asyncWrapper = require('./async')

const getAllProjects = asyncWrapper(async (req, res) => {
    const projects = await Project.find({});
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json({ projects })
})

const getNote = asyncWrapper(async (req, res) => {
    const {title: noteId} = req.params
    const note = await Note.findOne({ title: noteId })
    res.status(200).json({ note })
})

module.exports = {
    getAllProjects,
    getNote
}