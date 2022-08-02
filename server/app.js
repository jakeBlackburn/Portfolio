const express = require('express')
const app = express()
const projects = require('./routes/projects');
const notes = require('./routes/notes');
const connectDB = require('./connect');
require('dotenv').config();
const notFound = require('./not-found');
const port = process.env.PORT || 3000;

//middleware
app.use(express.static('./dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('../dist/index.html')
})

//routes
app.use('/api/v1/projects', projects)
app.use('/api/v1/notes', notes)

app.use(notFound)

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();