const { Router } = require('express');
const noteController = require('./controllers/noteController');

const routes = Router();

routes.get('/', noteController.index);
routes.post('/', noteController.create);

module.exports = routes;