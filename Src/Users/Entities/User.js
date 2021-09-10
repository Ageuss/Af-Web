const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      adress: DataTypes.STRING,
      saldo: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      freezeTableName: true
    }
    )
  }
}

module.exports = User;