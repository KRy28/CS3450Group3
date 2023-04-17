'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Person, {foreignKey: {name: 'person_id'}});
    }
  }
  Employee.init({
    hours: DataTypes.FLOAT,
    payRate: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};
