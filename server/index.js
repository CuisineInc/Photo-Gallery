const newrelic = require('newrelic');
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

app.use('/:listing', express.static('public'));

app.use('/loaderio-b7166be4c9c295962a2638c2cf37fbf3', express.static('./loaderio-b7166be4c9c295962a2638c2cf37fbf3.txt'))

app.get('/api/restaurants/:id/images', controller.getImages);

app.get('/api/images/:id', controller.getImage);

app.post('/api/images', controller.insertImage);

app.put('/api/images/:id', controller.updateImage);

app.delete('/api/restaurants/:id/images', controller.deleteImages);

app.delete('/api/images/:id', controller.deleteImage);

app.listen(port, () => console.log(`App is listening on port ${port}!`));

