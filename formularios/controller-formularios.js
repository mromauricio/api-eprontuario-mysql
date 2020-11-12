/*
return  status_code
0       200/201
1       400 Bad Request
2       404 Not Found
3       406 Not Acceptable
4       401 Unauthorized
5       500 Internal Server Error
*/

const express = require('express');
const async = require('async');
const serviceFormularios = require('./service-formularios.js');
const router = express.Router();

router.get('/lista', async (req, res, next) => {
  res.header('Content-Type','application/json');
  let retorno = await serviceFormularios.RuleSelectFormularios();
  switch (retorno) {  
    case 2: return res.status(404).send({});    
    case 3: return res.status(406).send({});
    case 5: return res.status(500).send({});
    default: return res.status(200).send(retorno);    
  }
});

router.put('/', async (req, res, next) => {
  res.header('Content-Type','application/json');
  let retorno = await serviceFormularios.RuleUpdateFormulario(req.query.id,req.query.tipo);
  switch (retorno) {  
    case 0: return res.status(201).send();
    case 2: return res.status(404).send();    
    case 3: return res.status(406).send();
    case 5: return res.status(500).send();
  }
});

router.post('/', async (req, res, next) => {
  res.header('Content-Type','application/json');
  let retorno = await serviceFormularios.RuleInsertFormulario(req.body);
  switch (retorno) {  
    case 2: return res.status(404).send();    
    case 3: return res.status(406).send();
    case 5: return res.status(500).send();
    default: return res.status(200).send();    
  }
});

module.exports = router;