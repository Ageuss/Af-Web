const Express = require("express");
const routes = Express.Router();

const UserController = require('../Users/Controllers/UserController')
const ProductController = require('../Users/Controllers/ProductController')
const CompraController = require('../Users/Controllers/CompraControllers')

routes.get('/users', UserController.index)
routes.post('/users/register', UserController.store)
routes.post('/users/login', UserController.login);

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.delete('/products', ProductController.delete)
routes.put('/products', ProductController.update)
routes.get('/products/:nome', ProductController.filter)

routes.post('/comprar', CompraController.comprar)


module.exports = routes;