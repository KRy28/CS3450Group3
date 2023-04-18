const express = require('express');
const router = express.Router();

const { Person } = require('../database/models');
const { Employee } = require('../database/models');
const { Manager } = require('../database/models');

router.get('/:employee', async function(req, res, next) {
  // api params: (amount) | amount :: int
  const employee = req.params.employee;

  try {
    if (req.user == undefined) {
      res.json("LoggedOutErr")
    } else {
      const realPerson = await Person.findOne({ where: { id: employee }});

      if (realPerson == undefined) {
        res.json("LoggedOutErr")
      } else {
        // checks for employee than manger than if undefined sends err
        var person = await Employee.findOne({ where: { person_id: realPerson.id}});
        if (person == undefined) {
          var person = await Manager.findOne({ where: { person_id: realPerson.id}});
        };

        // error check than reply
        if (person == undefined) {
          res.json("IsUserErr")
        } else {
          
          realPerson.wallet = realPerson.wallet + (person.hours * person.payRate);
          realPerson.save();
          person.hours = 0;
          person.save();
          res.json("Success");
        };
      };
    };
  } catch (err) {
    console.log(err);
    res.json("unknowmFatalErr");
  };
});

router.get('/', async function(req, res, next) {
  try {
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
    res.json("Success");
  } catch(err) {
    console.log(err);
    res.json("unknowmFatalErr");
  };
});

module.exports = router;
