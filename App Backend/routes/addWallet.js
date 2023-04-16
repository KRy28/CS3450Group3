const express = require('express');
const router = express.Router();

const { Person } = require('../database/models');


router.get('/', function(req, res, next) {
  res.json(['/add', '/subtract']);
});


router.param('amount', function(req, res, next, amount) {
    const amountNum = parseInt(amount);
    req.amount = amountNum;
    next();
});

router.get('/get', async function(req, res, next) {
  const person = await Person.findOne({ where: { username: 'WatsonMan'}})
  res.json(person.wallet)
  // Idea is to use something like ~/add/21 to add 21 to the wallet
});
router.get('/add/:amount', async function(req, res, next) {
  const person = await req.user
  console.log(person)
  person.wallet = (person.wallet + req.amount)
  person.save()
  // Idea is to use something like ~/add/21 to add 21 to the wallet
});

router.get('/subtract/:amount', async function(req, res, next) {
  const person = await req.person
  person.wallet = (person.wallet - req.amount)
  person.save()
  // Idea is to use something like ~/add/21 to add 21 to the wallet
});

module.exports = router;
