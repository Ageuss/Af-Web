const Sequelize = require('sequelize');
const database = require('../Config/Connection');

const User = require('../Src/Users/Entities/User')
const Product = require('../Src/Users/Entities/produto')
const Compra = require('../Src/Users/Entities/Compra')


const conn = new Sequelize(database);

User.init(conn);
Product.init(conn);
Compra.init(conn);

module.exports = conn;