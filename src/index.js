const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());  

let controllerPacientes = require('../pacientes/controller-pacientes');
app.use('/pacientes', controllerPacientes);

let controllerAtendimentos = require('../atendimentos/controller-atendimentos.js');
app.use('/atendimentos', controllerAtendimentos);

let controllerFormularios = require('../formularios/controller-formularios.js');
app.use('/formularios', controllerFormularios);

app.listen(9001, '0.0.0.0', function(){
  console.log('Listening on port 9001');
});

