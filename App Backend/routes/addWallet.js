const express = require('express');
const router = express.Router();

const { Person } = require('../database/models');


router.get('/', function(req, res, next) {
  res.json(['/add', '/subtract']);
});

router.get('/get', async function(req, res, next) {
  try {

    // get person
    const person = await Person.findOne({ where: { username: req.user.username}})
    
    // error checks
    if (person == undefined) {
      res.json("LoggedOutErr")
    } else {
      res.json(person.wallet)
    };
  } catch(err) {
    console.log(err);
    res.json("unknownFatalErr");
  };
});
router.get('/add/:amount', async function(req, res, next) {
  try {

    // get person
    const person = await Person.findOne({ where: { username: req.user.username}});

    // err checks
    if (person == undefined) {
      res.json("LoggedOutErr");
    } else {
      person.wallet = (person.wallet + req.amount);
      person.save();
      res.json("Success");
    };
  } catch(err) {
    console.log(err);
    res.json("unknownFatalErr");
  };
});

router.get('/subtract/:amount', async function(req, res, next) {
  try {

    // get person
    const person = await Person.findOne({ where: { username: req.user.username}});

    // err checks
    if (person == undefined) {
      res.json("LoggedOutErr");
    } else {
      person.wallet = (person.wallet - req.amount);
      person.save();
      res.json("Success");
    };
  } catch(err) {
    console.log(err);
    res.json("unknownFatalErr");
  };
});

module.exports = router;
