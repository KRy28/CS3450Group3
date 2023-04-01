const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const carsRouter = require('./cars');
const loginRouter = require('./login')

router.get('/', function(req, res, next) {
  res.json(['/users', '/cars', '/HelloWorld.txt', '/login']);
});

router.use('/users', usersRouter);
router.use('/cars', carsRouter);
router.use('/login', loginRouter);


module.exports = router;
