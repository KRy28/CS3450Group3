
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Person, {foreignKey: {name: 'person_id'}});
      //User.hasMany(models.Reservation, {foreignKey: {name: 'user_id'}});
    }
  }
  User.init({
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
