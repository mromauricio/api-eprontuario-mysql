
const express = require('express');
const async = require('async');
const servicePacientes = require('./service-pacientes.js');
const router = express.Router();

const mysql = require('mysql');
const connecttion = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'pwdmysql',
  database: 'eprontuario'
});
connecttion.connect();

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

router.get('/nomePOSTMAN', function(req, res){
  connecttion.query(`SELECT * FROM pacientestemp WHERE nome LIKE '${req.query.nome}'`, function (error, results){
    if (error) throw error
    res.send(results.map(registro => ({id: registro.id, nome: registro.nome, cpf: registro.cpf})));
  });
});


router.get('/', function(req, res){
  connecttion.query('SELECT * FROM pacientestemp', function (error, results){
    if (error) throw error
    //console.log(results.length);
    res.send(results)
    //res.status(200).send(results.map(registro => ({id: registro.id, nome: registro.nome, cpf: registro.cpf})));
  });
});



router.put('/:id', function(req, res){
  req.params.id = req.params.id.replace('id=','');
  connecttion.query(`UPDATE pacientestemp SET nome = '${req.body.nome}',cpf = '${req.body.cpf}' WHERE id LIKE ${req.params.id}`, function (error, results){
    if (error) throw error
    if (results.affectedRows==1) res.status(200).send() 
    else res.status(400).send()
  });
});


module.exports = router;