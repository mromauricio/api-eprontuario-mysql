const express = require('express');
const async = require('async');
const serviceAtendimentos = require('./service-atendimentos.js');
const router = express.Router();
const fs = require('fs');


router.get('/html', async (req, res, next) => {
  if (req.query.html == 'atendimentos'){
    fs.readFile('atendimentos/view-atendimentos.html', function (error, html) {
      res.header('Content-Type','text/html' );
      if (error) res.status(404).send()
      else res.send(html);
    }); 
  }
  else if (req.query.html == 'busca'){
    fs.readFile('atendimentos/view-search.html', function (error, html) {
      res.header('Content-Type','text/html' );
      if (error) res.status(404).send()
      else res.send(html);
    }); 
  }
});

module.exports = router;