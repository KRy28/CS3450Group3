const express = require('express');
const router = express.Router();
const { isAuthenticated, authcodes, isTheUser } = require('./helpers')

const { Person } = require('../database/models')

router.get('/add', async function(req, res, next) {
  const person = await req.user
  user.wallet = (user.wallet + 10)
  user.save()
  // Idea is to use something like ~/add/21 to add 21 to the wallet
});

router.get('/subtract', async function(req, res, next) {
  const person = await req.user
  user.wallet = (user.wallet - 10)
  user.save()
  // Idea is to use something like ~/add/21 to add 21 to the wallet
});

module.exports = router;
