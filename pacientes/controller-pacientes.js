
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

router.get('/', function(req, res){
  connecttion.query('SELECT * FROM pacientestemp', function (error, results){
    if (error) throw error
    //console.log(results.length);
    res.status(200).send(results)
    //res.status(200).send(results.map(registro => ({id: registro.id, nome: registro.nome, cpf: registro.cpf})));
  });
});

router.get('/nome', function(req, res){
  connecttion.query(`SELECT * FROM pacientestemp WHERE nome LIKE '${req.query.nome}'`, function (error, results){
    if (error) throw error
    res.send(results.map(registro => ({id: registro.id, nome: registro.nome, cpf: registro.cpf})));
  });
});

router.post('/postman', function(req, res){
  connecttion.query(`INSERT INTO pacientestemp (id, nome, cpf) VALUES (0,'${req.body.nome}','${req.body.cpf}')`, function (error, results){
    if (error) throw error
    if (results.affectedRows==1) res.status(201).send() 
    else res.status(400).send()
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