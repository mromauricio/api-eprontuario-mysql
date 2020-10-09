const express = require('express');
const async = require('async');
const viewAtendimentos = require('./view-atendimentos.js');
const router = express.Router();
const fs = require('fs');

router.get('/html', async (req, res, next) => {
  res.header('Content-Type','text/html' );
  let retorno =  await viewAtendimentos.ReadHtmlFile(req.query.html);
  switch (retorno) {  
    case 2: return res.status(404).send();  
    default: return res.send(retorno);    
  }
});

module.exports = router;