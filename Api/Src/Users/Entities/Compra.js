const { Model, DataTypes } = require('sequelize');

class Compra extends Model {
  static init(sequelize){
    super.init({
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      valor: DataTypes.INTEGER,
      qtd: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'Compra',
      tableName: 'compra',
      freezeTableName: true
    }
    )
  }

  static associate (models){
      this.belongsTo(models.User, {
          foreignKey: 'user_id'
      })
      this.belongsTo(models.Produto, {
          foreignKey: 'product_id'
      })
  }
}
  

module.exports = Compra;