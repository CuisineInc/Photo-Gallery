const faker = require('faker');

const fs = require('fs');

const writeRestaurants = fs.createWriteStream('database/restaurants.csv')

writeRestaurants.write('restaurant, location\n')

const writeImages = fs.createWriteStream('database/images.csv')

writeImages.write('restaurantId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag\n')

function createRestaurants (writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.company.companyName().split(' ')[0];
      const restaurant = name.includes(',')? name.slice(0, name.length-1) : name
      const location = `${faker.address.city()}`;
      const data = `${restaurant}, ${location}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback)
      } else {
        ok = writer.write(data, encoding)
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

function createImages (writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for(var j = 0; j < 20; j++) {
        const restaurantId = id;
        const randomImage = faker.random.number({min:1, max:500});
        const imageUrl = `https://sdc-photo-gallery.s3-us-west-1.amazonaws.com/${randomImage}.jpg`;
        const description = faker.lorem.sentence();
        const date = faker.date.between('2019-01-01', '2019-12-31').toJSON().slice(0, 10).replace('T', ' ');
        const userSubmit = Math.random() >= .5;
        const unrelatedFlag = 0;
        const inappropriateFlag = 0;
        const dislikeFlag = 0;
        const data = `${restaurantId}, ${imageUrl}, ${description}, ${date}, ${userSubmit}, ${unrelatedFlag}, ${inappropriateFlag}, ${dislikeFlag}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback)
        } else {
          ok = writer.write(data, encoding)
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}


createRestaurants(writeRestaurants, 'utf-8', () => {
  writeRestaurants.end()
})

createImages(writeImages, 'utf-8', () => {
  writeImages.end()
})