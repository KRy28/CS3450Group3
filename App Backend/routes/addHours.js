const express = require('express');
const router = express.Router();


const { Person } = require('../database/models');
const { Manager } = require('../database/models');
const { Employee } = require('../database/models');

router.get('/', function(req, res, next) {
  res.json(['/add', '/subtract']);
});


router.param('amount', function(req, res, next, amount) {
    const amountNum = parseInt(amount);
    req.amount = amountNum;
    next();
});

router.get('/get', async function(req, res, next) {
  try {
  const realPerson = await Person.findOne({ where: { username: req.user.username}});
  const person = await Employee.findOne({ where: { person_id: realPerson.id}});
  if (person == undefined) {
     const person = await Manager.findOne({ where: { person_id: req.user.id}})
  };
  res.json(person.hours);
  res.json("Success")
  } catch (err) {
    console.log('err')
    res.json("AuthErr")
  }
});
router.get('/add/:amount', async function(req, res, next) {
  try {
  const realPerson = await Person.findOne({ where: { username: req.user.username}});
  const person = await Employee.findOne({ where: { person_id: realPerson.id}});
  if (person == undefined) {
     const person = await Manager.findOne({ where: { person_id: req.user.id}})
  };
  console.log(person.hours) 
  person.hours = parseInt(person.hours + req.amount);
  person.save();
  res.json("Success")
  } catch (err) {
    console.log('err')
    res.json("AuthErr")
  }
});

router.get('/subtract/:amount', async function(req, res, next) {
  try {
  const realPerson = await Person.findOne({ where: { username: req.user.username}});
  const person = await Employee.findOne({ where: { person_id: realPerson.id}});
  if (person == undefined) {
     const person = await Manager.findOne({ where: { person_id: req.user.id}})
  };
  person.hours = (person.hours - req.amount);
  person.save();
  res.json("Success")
  } catch (err) {
    console.log('err')
    res.json("AuthErr")
  }
});

module.exports = router;
