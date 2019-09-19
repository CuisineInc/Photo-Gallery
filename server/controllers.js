const connection = require('../database/db')

const getImages = (req, res) => {
  const id = parseInt(req.params.id)
  connection.query('select * from images where restaurant_id = $1', [id], (error, results) => {
    if(error) {
      res.send(error)
    } else {
      res.send(results.rows)
    }
  })
}

const getImage = (req, res) => {
  const id = parseInt(req.params.id)
  connection.query('select * from images where id = $1', [id], (error, results) => {
    if(error) {
      res.send(error)
    } else {
      res.send(results.rows)
    }
  })
}

const insertImage = (req, res) => {
  const {restaurantId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag} = req.body
  connection.query('insert into images (restaurant_id, image_url, description, date, user_submit, unrelated_flag, inappropriate_flag, dislike_flag) values($1, $2, $3, $4, $5, $6, $7, $8)', [restaurantId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag], (error, results) => {
    if(error) {
      res.send(error)
    } else {
      res.status(200).send(`Image added to restaurant ${restaurantId}`)
    }
  })
}

const updateImage = (req, res) => {
  const id = parseInt(req.params.id)
  const {restaurantId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag} = req.body
  connection.query('update images set restaurant_id = $1, image_url = $2, description = $3, date = $4, user_submit = $5, unrelated_flag = $6, inappropriate_flag = $7, dislike_flag = $8 where id = $9 ', [restaurantId, imageUrl, description, date, userSubmit, unrelatedFlag, inappropriateFlag, dislikeFlag, id], (error, results) => {
    if(error) {
      res.send(error)
    } else {
      res.send(`Image with id ${id} udpdated!`)
    }
  })
  
}

const deleteImages = (req, res) => {
  const id = parseInt(req.params.id)
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