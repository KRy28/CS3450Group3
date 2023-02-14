const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const carsRouter = require('./cars');

router.get('/', function(req, res, next) {
  res.json(['/users', '/cars', '/HelloWorld.txt']);
});

router.use('/users', usersRouter);
router.use('/cars', carsRouter);


module.exports = router;
