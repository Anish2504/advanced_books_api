const express = require('express');
const router = express.Router();

/* GET books listing. */
router.get('/', (req, res, next) => {
  res.json({books: [{title: 'The Bible'}]});
});

module.exports = router;
