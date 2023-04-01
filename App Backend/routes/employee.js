const express = require('express');
const router = express.Router();
const { authcodes, isAuthenticated } = require('./helpers')
router.use('/', isAuthenticated(authcodes.EMPLOYEE))
