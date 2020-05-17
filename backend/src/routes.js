const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');
const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');

routes.get('/users', userController.index);
routes.post('/users', userController.create);
routes.put('/users', userController.update);
routes.delete('/users', userController.delete);


routes.get('/lists', listController.index);
routes.post('/lists', listController.create);
routes.put('/lists', listController.update);
routes.delete('/lists', listController.delete);

routes.get('/cards', cardController.index);
routes.post('/cards', cardController.create);
routes.put('/cards', cardController.update);
routes.delete('/cards', cardController.delete);


module.exports = routes;
