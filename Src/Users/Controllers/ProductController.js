const ProductRepository = require('../Repository/ProductRepository');

module.exports = {
  async index(req, res) {
    const produtos = await ProductRepository.selectProdutos();
    return res.send(produtos);
  },

  async store(req, res){
    try{
      
      const { valor, nome, descricao } = req.body;
      const product = await ProductRepository.insertProdutos(valor, nome, descricao);
      return res.send(product)
    } catch(e){
      return res.status(400).send(e);
    }
  },
  
  async delete(req, res){
    try{
      const {id} = req.body;
      const product = await ProductRepository.deleteProduct(id)
      res.send(true)

    } catch(e) {
      return res.status(400).send(e);
    }
  },

  async update(req, res){
    try{
      const {id, nome, descricao} = req.body;
      const product = await ProductRepository.updateProduct(id, nome, descricao)
      res.send(true)
    } catch(e){
      return res.status(400).send(e);
    }
  },

  async filter(req, res){
    try{

      const nome = req.params.nome
      const product = await ProductRepository.findByName(nome)
      res.send(product)
    } catch(e){
      return res.status(400).send(e);
    }
  }

  
}
