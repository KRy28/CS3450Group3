const express = require('express');
const router = express.Router();

const { User } = require('../database/models')

router.get('/', function(req, res, next) {
  res.json(['/json', '/string']);
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
