const Sequelize = require('sequelize');
const database = require('../Config/Connection');

const User = require('../Src/Users/Entities/User')
const Product = require('../Src/Users/Entities/produto')


const conn = new Sequelize(database);

User.init(conn);
Product.init(conn);

module.exports = conn;