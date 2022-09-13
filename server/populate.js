require('dotenv').config()

const connectDB = require('./connect')
const Project = require('./models')

const Projects = require('./data.json')


const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const start = async () => {
  try {
    await connectDB(`mongodb+srv://${username}:${password}@portfolio-cluster.sknurkv.mongodb.net/portfolio-db?retryWrites=true&w=majority`);
    await Project.deleteMany()
    await Project.create(Projects)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
