const Produto = require('../Entities/produto')

module.exports = {
    async selectProdutos() {
        const produtos = await Produto.findAll({});
        return produtos;
    },

    async insertProdutos(valor, nome, descricao) {
        try {
            const produtos = await Produto.create({ valor, nome, descricao });
            return produtos;
        } catch (e) {
            return e;
        }
    },

    async findByName(nome) {
    
        const produtos = await Produto.findAll({ where: { nome: nome } });
        if (produtos == null)
            return false;
        return produtos;
    },

    async findById(id) {
        const produtos = await Produto.findOne({ where: { id: id } });
        if (produtos == null)
            return false;
        return produtos;
    },

    async deleteProduct(id) {
        const produtos = await Produto.destroy({ where: { id } })
        if (produtos == null)
            return false;
        return produtos;
    },

    async updateProduct(id, nome, descricao) {
        const produtos = await Produto.update(
            {
                nome: nome,
                descricao: descricao
            },
            {
                where: { id: id }
            }
        )
        if (produtos == null)
            return false;
        return produtos;
    }

}

