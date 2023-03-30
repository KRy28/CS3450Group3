const express = require('express');
const router = express.Router();

const { Car } = require('../database/models')

router.get('/', function(req, res, next) {
  res.json(['/json', '/string']);
});

router.get('/json', async function(req, res, next) {
  const cars = await Car.findAll()
  res.json(cars);
});

router.get('/string', async function(req, res, next) {
  const cars = await Car.findAll()
  res.send(cars.map(c => `${c.make} ${c.model} ${c.year} ${c.condition} ${c.description} ${c.rate} ${c.image}`).join(', '));
});

module.exports = router;
