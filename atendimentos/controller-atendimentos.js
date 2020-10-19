const express = require('express');
const async = require('async');
const viewAtendimentos = require('./view-atendimentos.js');
const serviceAtendimentos = require('./service-atendimentos.js')
const router = express.Router();

// router.post('/', async (req, res, next) => {
//   console.log(req.body);
//   res.status(201).send();
// });

router.post('/', async (req, res, next) => {
  switch (await serviceAtendimentos.RuleInsertAtendimento(req.body)) {
    case 0: return res.status(201).send();
    case 3: return res.status(406).send();
    case 5: return res.status(500).send();    
  }
});




//////////////////// TESTES FS READFILE ///////////////////
router.get('/html', async (req, res, next) => {
  res.header('Content-Type','text/html' );
  let retorno =  await viewAtendimentos.ReadHtmlFile(req.query.html);
  switch (retorno) {  
    case 2: return res.status(404).send();  
    default: return res.send(retorno);    
  }
});

router.get('/png', async (req, res, next) => {
  res.header('Content-Type','image/png' );
  let retorno =  await viewAtendimentos.ReadHtmlFile(req.query.png);
  switch (retorno) {  
    case 2: return res.status(404).send();  
    default: return res.send(retorno);    
  }
});

router.get('/pdf', async (req, res, next) => {
  res.header('Content-Type','application/pdf' );
  let retorno =  await viewAtendimentos.ReadHtmlFile(req.query.pdf);
  switch (retorno) {  
    case 2: return res.status(404).send();  
    default: return res.send(retorno);    
  }
});



module.exports = router;


// http://localhost:9001/atendimentos/html/?html=atendimentos/view-atendimentos.html