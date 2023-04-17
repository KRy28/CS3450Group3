const express = require('express');
const router = express.Router();

const { Person } = require('../database/models');
const { Employee } = require('../database/models');
const { Manager } = require('../database/models');



router.get('/', async function(req, res, next) {
  const employees = await Employee.findAll();
  const managers = await Manager.findAll();
  
  for (var i = 0, size = employees.length; i < size; i++) {
    var item = employees[i];
    var currentPerson = await Person.findOne({ where: { id: item.person_id }});
    currentPerson.wallet = currentPerson.wallet + (item.hours * item.payRate);
    currentPerson.save();
    item.hours = 0;
    item.save();
  }
  for (var i = 0, size = managers.length; i < size; i++) {
    var item = managers[i];
    var currentPerson = await Person.findOne({ where: { id: item.person_id }});
    currentPerson.wallet = currentPerson.wallet + (item.hours * item.payRate);
    currentPerson.save();
    item.hours = 0;
    item.save();
  }
  res.json("Success")
  // Idea is to use something like ~/add/21 to add 21 to the wallet
});

module.exports = router;
