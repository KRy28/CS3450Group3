const express = require('express');
const router = express.Router();
const { isAuthenticated, authcodes, isTheUser } = require('./helpers')

const { User } = require('../database/models')

router.get('/', isAuthenticated(authcodes.MANAGER), function(req, res, next) {
  res.json(['/json', '/string']);
});

router.use('/cart', isAuthenticated(authcodes.USER), function(req, res, next) {
  res.send('(cart info here)')
});

router.get('/json', async function(req, res, next) {
  const users = await User.findAll()
  res.json(users);
});

router.get('/string', async function(req, res, next) {
  const users = await User.findAll()
  res.send(users.map(u => u.firstName).join(', '));
});

module.exports = router;
