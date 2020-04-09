const express = require('express');
const router = express.Router();
const bookscontroller = require('../controllers/bookscontroller')

router
.get('/', bookscontroller.index)
.get('/:id', bookscontroller.show)

module.exports = router;
