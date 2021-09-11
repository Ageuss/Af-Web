const CompraRepository = require('../Repository/CompraRepository')
const UserRepository = require('../Repository/UserRepository')
const ProductRepository = require('../Repository/ProductRepository');

module.exports = {
  async index(req, res) {
    const compra = await compraRepository.selectCompras();
    return res.send(compra);
  },

  async insert(req, res) {
    try {
      const { user_id, product_id, valor, qtd } = req.body;
      const compra = await CompraRepository.insertCompras(user_id, product_id, valor, qtd);
      return res.send(compra)
    } catch (e) {
      return res.status(400).send(e);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.body;
      const compra = await CompraRepository.deleteCompras(id)
      res.send(true)

    } catch (e) {
      return res.status(400).send(e);
    }
  },

  async comprar(req, res) {
    try {
      const { user_id, product_id, qtd } = req.body
      const user = await UserRepository.findById(user_id)
      const product = await ProductRepository.findById(product_id)
      if (user.saldo >= product.valor * qtd) {
        const valor = product.valor * qtd
        const compra = await CompraRepository.insertCompras(user_id, product_id, valor, qtd);
        const newSaldo = user.saldo - product.valor * qtd;
        UserRepository.decreaseSaldo(user.id, newSaldo);
        return res.send(compra)
      } else {
        return res.send('Saldo insuficiente')
      }
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}