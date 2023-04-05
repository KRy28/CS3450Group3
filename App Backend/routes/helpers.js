module.exports.authcodes = {
  USER: 1,
  EMPLOYEE: 2,
  MANAGER: 3
}

module.exports.isAuthenticated = (level) => (req, res, next) => {
  if (req.user && req.elevation >= level) {
    next(); // The user is authenticated
  } else {
    res.status(401).send('Not authenticated.');
  }
}

module.exports.isTheUser = (userId) => (req, res, next) => {
  if (req.user.id === userId) {
    next();
  } else {
    res.status(401).send('Not authenticated')
  }
}

module.exports.generateHashedPassword = password => crypto.pbkdf2(password, 'fixed salt lol', 310000, 32, 'sha256', () => {})
