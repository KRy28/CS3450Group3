const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const addWalletRouter = require('./addWallet');
const managersRouter = require('./managers');
const personsRouter = require('./persons');
const reservationsRouter = require('./reservations');
const carsRouter = require('./cars');
const {router: loginRouter} = require('./login')

router.get('/', function(req, res, next) {
  res.json(['/users', '/addWallet', 'reservations', '/cars', '/HelloWorld.txt', '/login']);
});

router.use('/users', usersRouter);
router.use('/addWallet', addWalletRouter);
router.use('/reservations', reservationsRouter);
router.use('/cars', carsRouter);
router.use('/login', loginRouter);


module.exports = router;
