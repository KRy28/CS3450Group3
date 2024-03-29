
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Manager.belongsTo(models.Person, {foreignKey: {name: 'person_id'}})
    }
  }
  Manager.init({
     hours: DataTypes.FLOAT,
     payRate: DataTypes.FLOAT

  }, {
    sequelize,
    modelName: 'Manager',
  });
  return Manager;
};
