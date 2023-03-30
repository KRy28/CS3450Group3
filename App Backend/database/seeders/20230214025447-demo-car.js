'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
    {	
      make: `Lightning`,
      model: `McQueen`,
      year: 1924,
      condition: `poor`,
      description: `Cars 3 really did a number on 'em`,
      rate: 66.24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      make: `Reliant`,
      model: `Robin`,
      year: 1985,
      condition: `poor`,
      description: `Woot Woot`,
      rate: 100.00,
      image: `https://upload.wikimedia.org/wikipedia/commons/4/42/1977_Reliant_Robin_850_%2814136529926%29_%28cropped%29.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      make: `Batman`,
      model: `Batmobile`,
      year: 1966,
      condition: `New`,
      description: `Classic`,
      rate: 200.00,
      image: `https://i.insider.com/620ef712462ff20019c59af9?width=700`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      make: `Christopher Lloyd's`,
      model: `Delorean`,
      year: 1985,
      condition: `scrap`,
      description: `seems odd and undrivable also tires are all burnt, dont know why ppl keep renting it`,
      rate: 150.00,
      image: `https://hagerty-media-prod.imgix.net/2021/12/BTTF-DeLorean-CATC-2021-Hagerty-Drivers-Foundation-01-scaled.jpg?auto=format%2Ccompress&ixlib=php-3.3.0`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      make: `God, Gift of`,
      model: `The Beast`,
      year: 1979,
      condition: `Imaculate`,
      description: `A Gift of Gad use at your own risk`,
      rate: 7777777.77,
      image: `https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91dKQ+KFNEL._AC_UF894,1000_QL80_.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cars', null, {});
  }
};
