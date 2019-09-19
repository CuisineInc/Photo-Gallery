const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const seedListings = () => {
  for (var i = 1; i <= 1000000; i++) {
    const name = faker.company.companyName().split(' ')[0]
    const location = `${faker.address.city()}, ${faker.address.state()}`
    connection.query('INSERT INTO listings (name, location) VALUE (?, ?)', [name, location], (error, results) => {
      if (error) {
        console.log(error)
      } else {
        console.log(`Listing ${i} seeded!`)
      }
    });
  }
};

const seedImages = () => {
  for(var i=1; i<=1000000; i++) {
    for (var j = 1; j <= 20; i++) {
      const listingId = i
      const imageId = faker.random.number({min:1, max:500})
      const imageUrl = `https://sdc-photo-gallery.s3-us-west-1.amazonaws.com/${imageId}.jpg`;
      const description = ''
      const date = faker.date.between('2019-01-01', '2019-12-31')
      const userSubmit = Math.random() >= .5
      const unrelatedFlag = 0
      const inappropriateFlag = 0
      const dislikeFlag = 0
      connection.query('INSERT INTO images (listing_id, image_url, description, date, user_submit, unrelated_flag, inappropriate_flag, dislike_flag) VALUE (?, ?, ?, ?, ?, ?, ?, ?)', [listingId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag], (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Image ${j} of ${listingId} seeded!`)
        }
      });
    }
  }
};

seedListings();
seedImages();