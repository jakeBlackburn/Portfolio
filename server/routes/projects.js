const express = require('express')

const router = express.Router()

const { getAllProjects, getProject } = require('../controllers')

router.route('/').get(getAllProjects)
router.route('/:title').get(getProject)

module.exports = router
