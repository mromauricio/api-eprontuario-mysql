const express = require('express');
const async = require('async');
const viewAtendimentos = require('./view-atendimentos.js');
const router = express.Router();

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