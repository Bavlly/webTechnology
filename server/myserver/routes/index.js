const path = require('path');

const express = require('express');

const router = express.Router();

//GET
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/description', (req, res, next) => {
  res.render('description');
});

router.get('/concurrency', (req, res, next) => {
  res.render('concurrency');
});

router.get('/assignments', (req, res, next) => {
  res.render('assignments');
});

router.get('/info', (req, res, next) => {
  res.render('info');
});

router.get('/schedule', (req, res, next) => {
  res.render('schedule');
});

//
//GET
router.get('/account', (req, res, next) => {
  res.render('account');
});

module.exports = router;
