export const authcodes = {
  USER: 1,
  EMPLOYEE: 2,
  MANAGER: 3
}

export const isAuthenticated = (level) => (req, res, next) => {
  if (req.user && req.elevation >= level) {
    next(); // The user is authenticated
  } else {
    res.status(401).send('Not authenticated.');
  }
}

export const isTheUser = (userId) => (req, res, next) => {
  if (req.user.id === userId) {
    next();
  } else {
    res.status(401).send('Not authenticated')
  }
}

export const generateHashedPassword = password => crypto.pbkdf2(password, 'fixed salt lol', 310000, 32, 'sha256', () => {})
