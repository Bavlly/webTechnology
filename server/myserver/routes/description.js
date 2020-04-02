const path = require('path');

const express = require('express');

const router = express.Router();

//GET
router.get('/', (req, res, next) => {
  res.render('description');
});

module.exports = router;
