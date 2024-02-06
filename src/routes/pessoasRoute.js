const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoController = new PessoaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoController.pegaTodos(req, res));

module.exports = router;

