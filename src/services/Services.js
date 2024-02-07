const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
    
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro() {
    return dataSource[this.model].create();
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if (listaDeRegistroAtualizado[0] === 0) {
      return false;
    }
    return true;
  }

  async excuiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;