const Services = require('./Services.js');
const dataSource = require('../database/models');


class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices = new Services('Matricula');  
  }

  async pegaMatriculasAtivasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaTodasAsMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getTodasAsMatriculas();
    return listaMatriculas;
  }

  async pegaPessoasEscopoTodos() {
    const ListaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return ListaPessoas;
  } 

  async cancelaPessoaEMatriculas(estudanteId) {
    return dataSource.sequelize.transaction(async (transacao) => {
      await super.atualizaRegistro({ativo: false}, { id: estudanteId }, transacao);
      await this.matriculaServices.atualizaRegistro({status: 'cancelado'}, { estudante_id: estudanteId}, transacao);
    });
  }
}

module.exports = PessoaServices;