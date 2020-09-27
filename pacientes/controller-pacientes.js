
const express = require('express');
const async = require('async');
const servicePacientes = require('./service-pacientes.js');
const router = express.Router();

router.post('/', async (req, res, next) => {
  switch (await servicePacientes.RuleInsertPaciente(req.body)) {
    case 0:
        return res.status(201).send();
    case 1:
        return res.status(500).send();
    case 2:
        return res.status(406).send();
  }
});

router.get('/nome', async (req, res, next) => {
  let retorno = await servicePacientes.RuleSelectPacienteNome(req.query.nome);
  switch (retorno) {  
    case 1:
        return res.status(500).send({'':''});
    case 2:
        return res.status(406).send({'':''});
    case 3:
        return res.status(404).send({"Nome buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});

router.get('/cpf', async (req, res, next) => {
  let retorno = await servicePacientes.RuleSelectPacienteCpf(req.query.cpf);
  switch (retorno) {  
    case 1:
      return res.status(500).send({'':''});
    case 3:
        return res.status(404).send({"CPF buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});

router.get('/cns', async (req, res, next) => {
  let retorno = await servicePacientes.RuleSelectPacienteCns(req.query.cns);
  switch (retorno) {  
    case 1:
        return res.status(500).send({'':''});
    case 3:
        return res.status(404).send({"CNS buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});

router.get('/registro', async (req, res, next) => {
  let retorno = await servicePacientes.RuleSelectPacienteRegistro(req.query.registro);
  switch (retorno) {  
    case 1:
        return res.status(500).send({'':''});
    case 3:
        return res.status(404).send({"Registro buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});

router.put('/:id', async (req, res, next) => {
  let retorno = await servicePacientes.RuleUpdatePaciente(req.params.id,req.body);
  switch (retorno) {
    case 0:
        return res.status(200).send();
    case 1:
        return res.status(400).send();
    case 2:
        return res.status(406).send();
  }
});




// TEMP for Postman tests
router.get('/', function(req, res){
  connecttion.query('SELECT * FROM pacientes', function (error, results){
    if (error) throw error
    //console.log(results.length);
    res.send(results)
    //res.status(200).send(results.map(registro => ({id: registro.id, nome: registro.nome, cpf: registro.cpf})));
  });
});

module.exports = router;