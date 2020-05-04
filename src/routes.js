const express = require('express');
const UserController = require('./controllers/User');
const LikeController = require('./controllers/Like');
const DislikeController = require('./controllers/Dislike');
const routes = express.Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.store); 
routes.post('/user/:userId/likes', LikeController.store);
routes.post('/user/:userId/dislikes', DislikeController.store);

module.exports = routes;