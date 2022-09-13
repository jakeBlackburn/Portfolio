const Project = require('./models')
const asyncWrapper = require('./async')

const getAllProjects = asyncWrapper(async (req, res) => {
    const projects = await Project.find({});
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.status(200).json({ projects })
})

const getProject = asyncWrapper(async (req, res) => {
    const { title: title } = req.params
    const project = await Project.findOne({ title: title });
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.status(200).json({ project })
})

module.exports = {
    getAllProjects,
    getProject
}