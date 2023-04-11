
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.belongsTo(models.User);
      Person.belongsTo(models.Employee);
      Person.belongsTo(models.Manager);	
    }
  }
  Person.init({
    elevation: DataTypes.TINYINT,
    wallet: DataTypes.BIGINT,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    username: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'Persons'
  });
  return Person;
};
