const express = require('express');
const router = express.Router();


const { Person } = require('../database/models');
const { Manager } = require('../database/models');
const { Employee } = require('../database/models');

router.get('/', function(req, res, next) {
  res.json(['/add', '/subtract']);
});


router.get('/get', async function(req, res, next) {
  try {
    if (req.user == undefined) {
      res.json("LoggedOutErr")
    } else {
      const realPerson = await Person.findOne({ where: { username: req.user.username}});
      
      if (realPerson == undefined) {
        res.json("LoggedOutErr")
      } else {
        // checks for employee than manger than if undefined sends err
        const person = await Employee.findOne({ where: { person_id: realPerson.id}});
        if (person == undefined) {
          const person = await Manager.findOne({ where: { person_id: req.user.id}});
        };
	
        // error check than reply
        if (person == undefined) {
          res.json("IsUserErr")
        } else {
          res.json(person.hours);
        };
      };
    };
  } catch (err) {
    console.log(err);
    res.json("unknowmFatalErr");
  };
});


router.get('/add/:amount', async function(req, res, next) {
  // api params: (amount) | amount :: int
  const amount = req.params.amount;

  try {
    if (req.user == undefined) {
      res.json("LoggedOutErr")
    } else {
      const realPerson = await Person.findOne({ where: { username: req.user.username}});
      
      if (realPerson == undefined) {
        res.json("LoggedOutErr")
      } else {
        // checks for employee than manger than if undefined sends err
        const person = await Employee.findOne({ where: { person_id: realPerson.id}});
        if (person == undefined) {
          const person = await Manager.findOne({ where: { person_id: req.user.id}});
        };
	
        // error check than reply
        if (person == undefined) {
          res.json("IsUserErr")
        } else {
          person.hours = parseInt(person.hours + amount);
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

router.get('/subtract/:amount', async function(req, res, next) {
  try {
    if (req.user == undefined) {
      res.json("LoggedOutErr")
    } else {
      const realPerson = await Person.findOne({ where: { username: req.user.username}});

      if (realPerson == undefined) {
        res.json("LoggedOutErr")
      } else {
        // checks for employee than manger than if undefined sends err
        const person = await Employee.findOne({ where: { person_id: realPerson.id}});
        if (person == undefined) {
          const person = await Manager.findOne({ where: { person_id: req.user.id}});
        };
	
        // error check than reply
        if (person == undefined) {
          res.json("IsUserErr")
        } else {
          person.hours = parseInt(person.hours - req.amount);
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

module.exports = router;
