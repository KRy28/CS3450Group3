const express = require('express');
const router = express.Router();
const { isAuthenticated, authcodes } = require('./helpers')

router.get('/user', isAuthenticated(authcodes.USER), function(req, res, next) {
  res.json(req.user);
});

router.post('/logout', isAuthenticated(authcodes.USER), (req, res) => {
  req.logout((err) => {
    if (err) { console.error(err) }
    res.send('logged out')
  })
});

module.exports = router;
