const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());  

let controllerPacientes = require('../pacientes/controller-pacientes.js');
app.use('/pacientes', controllerPacientes);

app.listen(9001, '0.0.0.0', function(){
  console.log('Listening on port 9001');
});