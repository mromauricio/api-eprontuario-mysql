const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
app.use(bodyParser.json());
app.use(cors());  
app.use(compression()); //Compress all routes  - add response headers Content-Encoding: gzip
app.use(helmet());      // add response headers that help protect your app from well-known web vulnerabilities 

let controllerPacientes = require('../pacientes/controller-pacientes');
app.use('/pacientes', controllerPacientes);

let controllerAtendimentos = require('../atendimentos/controller-atendimentos.js');
app.use('/atendimentos', controllerAtendimentos);

let controllerFormularios = require('../formularios/controller-formularios.js');
app.use('/formularios', controllerFormularios);

app.listen(9001, '0.0.0.0', function(){
  console.log('Listening on port 9001');
});

