class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listadeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listadeRegistro);
    } catch (erro) {
      //erro
    }
  }

}

module.exports = Controller;