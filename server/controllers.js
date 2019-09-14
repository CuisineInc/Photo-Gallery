const connection = require('../database/db')

const getImages = (req, res) => {
  const id = parseInt(req.params.restaurantId)
  connection.query('select * from images where restaurant_id = $1', [id], (error, results) => {
    if(error) {
      res.send(error)
    } else {
      res.send(results)
    }
  })
}

const getImage = (req, res) => {
  const id = parseInt(req.params.id)
  connection.query('select * from images where id = $1', [id], (error, results) => {
    if(error) {
      res.send(error)
    } else {
      res.send(results)
    }
  })
}

const insertImage = (req, res) => {
  const {restaurantId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag} = req.body
  connection.query('insert into images (restaurant_id, image_url, description, date, user_submit, unrelated_flag) values($1, $2, $3, $4, $5, $6, $7, $8)', [restaurantId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag], (error, results) => {
    if(error) {
      res.send(error)
    } else {
      res.status(200).send(`Image added to restaurant ${restaurantId}`)
    }
  })
}

const updateImage = (req, res) => {

}

const deleteImages = (req, res) => {
  const id = parseInt(req.params.restaurantId)
  connection.query('delete from images where restaurant_id = $1', [id], (error, results) => {
    if(error) {
      res.send(error)
      //send error status
    } else {
      res.status(200).send(`Images of restaurant ${id} deleted!`)
    }
  })

}

const deleteImage = (req, res) => {
  const id = parseInt(req.params.id)
  connection.query('delete from images where id = $1', [id], (error, results) => {
    if(error) {
      res.send(error)
      //send error status
    } else {
      res.status(200).send(`Image with id ${id} deleted!`)
    }
  })
}

module.exports = {
  getImages,
  getImage,
  insertImage,
  updateImage,
  deleteImages,
  deleteImage
}



