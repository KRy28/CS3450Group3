const path = require('path');

const basePath = path.resolve(__dirname, '..', '..');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.join(basePath, 'database', 'database_development.sqlite'),
  },
  test: {
    dialect: 'sqlite',
    storage: path.join(basePath, 'database', 'database_test.sqlite'),
  },
  production: {
    dialect: 'sqlite',
    storage: path.join(basePath, 'database', 'database_production.sqlite'),
  },
};
