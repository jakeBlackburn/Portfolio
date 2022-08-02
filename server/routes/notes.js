const express = require('express')

const router = express.Router()

const { getNote } = require('../controllers')

router.route('/:id').get(getNote)

module.exports = router