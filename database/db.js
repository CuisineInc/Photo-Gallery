const Pool = require('pg').Pool
const connection = new Pool ({
  user: 'root',
  host: 'localhost',
  database: 'photo_gallery',
  password: '',
  port: 5432
})

module.exports = connection
