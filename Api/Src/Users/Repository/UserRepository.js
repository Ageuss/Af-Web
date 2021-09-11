const User = require('../Entities/User');

module.exports = {
  async selectUsers() {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['updated_at', 'DESC']],
    });
    return users;
  },

  async insertUsers(name, email, password, adress, saldo) {
    try {
      const user = await User.create({ name, email, password, adress, saldo });
      return user;
    } catch (e) {
      return e;
    }
  },

  async findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    if (user == null)
      return false;
    return user;
  },

  async findById(id) {
    const user = await User.findOne({ where: { id } });
    if (user == null)
      return false;
    return user;
  },

  async decreaseSaldo(id, newSaldo) {
    try {
      const down = User.update({
        saldo: newSaldo
      }, {
        where: { id: id }
      })
      if (produtos == null)
        return false;
      return produtos;
    } catch (e) {
      return e;
    }
  }

}