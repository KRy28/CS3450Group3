const express = require('express');
const router = express.Router();

const tempUsers = ['Benson', 'Ethan', 'Jaxson', "Jayden"]

router.get('/', function(req, res, next) {
  res.json(['/json', '/string']);
});

router.get('/json', function(req, res, next) {
  res.json(tempUsers);
});

router.get('/string', function(req, res, next) {
  res.send(tempUsers.join(', '));
});

module.exports = router;
