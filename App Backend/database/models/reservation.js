'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Reservation.belongsTo(models.User);
      //Reservation.belongsTo(models.Car);
    }
  }
  Reservation.init({
    start: DataTypes.DATEONLY,
    stop: DataTypes.DATEONLY,
    car_id: DataTypes.INTEGER,
    person_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
