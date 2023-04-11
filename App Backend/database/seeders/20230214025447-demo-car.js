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
      description: `Rev up your engines and get ready for a racing adventure like no other! Introducing Lightning McQueen, the iconic red race car from Radiator Springs, now available for rent at our car rental service. With his lightning-fast speed and unbeatable style, Lightning McQueen is the perfect choice for those who want to experience the thrill of the track on the open road. Whether you're planning a family road trip or just want to turn heads on your daily commute, Lightning McQueen is sure to impress. So why settle for an ordinary rental car when you can ride in style with Lightning McQueen? Book now and get ready to hit the road in the ultimate racing machine!`,
      rate: 66.24,
      image: `https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-17ohmzf_d340a6bd.jpeg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      make: `Reliant`,
      model: `Robin`,
      year: 1985,
      condition: `poor`,
      description: `Looking for a car that's as unique as you are? Look no further than the Reliant Robin! This three-wheeled wonder is perfect for those who dare to be different and want to stand out on the road. Despite its compact size, the Reliant Robin packs a punch with its nimble handling and surprisingly spacious interior. Whether you're headed on a road trip or just need a zippy ride around town, the Reliant Robin is the perfect choice for those who want to make a statement. So why settle for a boring rental car when you can drive a piece of automotive history? Rent the Reliant Robin today and experience the thrill of driving something truly one-of-a-kind!`,
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
      description: `Are you ready to take your ride to the next level? Look no further than our car rental service, where we offer the ultimate driving experience with the iconic Batmobile. Cruise the streets like the Caped Crusader himself and turn heads as you glide by in this sleek, black, and powerful machine. With its advanced technology and unparalleled style, the Batmobile is the perfect choice for any superhero, villain, or thrill-seeker looking to make a statement. So why settle for an ordinary ride when you can drive the Batmobile? Book now and get ready to save the day in style!`,
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
      description: `Ready to travel through time and make a statement? Our car rental service is proud to offer the ultimate ride for any fan of the iconic 80's film - the Delorean from Back to the Future! With its unmistakable stainless steel exterior and gull-wing doors, you'll turn heads and transport yourself back to the future in style. Whether you're looking to relive your favorite movie scenes or make a memorable entrance at your next event, the Delorean is the perfect choice. Don't wait - book your trip now and experience the magic of time travel for yourself!`,
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
      description: `Looking for a car that's sure to turn heads and make you feel like a kid again? Look no further than the Beast from our car rental service! This iconic toy car has been a childhood staple for generations, and now it's available for adults to relive those carefree days of cruising around the neighborhood. 

      With its vibrant red and yellow design, oversized "wheels", and sleek, sporty styling, the Beast is the ultimate cool car for anyone looking to make a statement. It may not have all the bells and whistles of a luxury sports car, but it's sure to put a smile on your face and make you feel like a kid again.
      
      So why settle for a boring rental car when you can rent the coolest car on the block? Book The Beast today and get ready for a ride you won't forget!`,
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
