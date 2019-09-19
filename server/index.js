const express = require('express');
const app = express();
const controller = require('./controllers');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');

const port = 5000;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}))

app.use(compression());

app.use(cors())

app.use(express.static('public'));
<<<<<<< HEAD

app.use('/:listing', express.static('public'));
=======
// app.use('/:listing', express.static('public'));
>>>>>>> master

app.get('/api/restaurants/:id/images', controller.getImages);

app.get('/api/images/:id', controller.getImage);

app.post('/api/images', controller.insertImage);

app.put('/api/images/:id', controller.updateImage);

app.delete('/api/restaurants/:id/images', controller.deleteImages);

app.delete('/api/images/:id', controller.deleteImage);

<<<<<<< HEAD
app.listen(port, () => console.log(`App is listening on port ${port}!`));
=======


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
>>>>>>> master
