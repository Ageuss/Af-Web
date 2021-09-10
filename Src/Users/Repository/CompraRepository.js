const Compra = require('../Entities/Compra')

module.exports = {
    async selectCompras() {
        const compra = await Compra.findAll({});
        return compra;
    },

    async insertCompras(user_id, product_id, valor, qtd) {
        try {
            const compra = await Compra.create({ user_id, product_id, valor, qtd });
            console.log(compra)
            return compra;
        } catch (e) {
            return e;
        }
    },

    async deleteCompras(id) {
        const compra = await Compra.destroy({ where: { id } })
        if (compra == null)
            return false;
        return compra;
    },
}