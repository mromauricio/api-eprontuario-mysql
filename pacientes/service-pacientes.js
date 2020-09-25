var async = require('async');
const daoPacientes = require('./dao-pacientes.js');

exports.RuleInsertPaciente = async (data) => {
  data.nome = data.nome.toUpperCase();
  if (data.cpf=='') return 2;                  // Regra que obriga o CPF ser preenchido
  if (await daoPacientes.InsertPaciente(data) == 0) return 0;
  return 1;
  }