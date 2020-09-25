var async = require('async');
const daoPacientes = require('./dao-pacientes.js');

exports.RuleInsertPaciente = async (data) => {
  data.nome = data.nome.toUpperCase();
  if (data.cpf=='') return 2;                  // Regra que obriga o CPF ser preenchido
  if (await daoPacientes.InsertPaciente(data) == 0) return 0;
  return 1;
  }

  exports.RuleSelectPacienteNome = async (query) => {
    query = query.toUpperCase();
    if (query == '') return 2;   // Teste fictício de validação da regra de negócio para provocar return 2 
    let retorno = await daoPacientes.SelectPacienteNome(query)
    if (retorno == '') return 3;
    if (retorno == 1) return 1;
    return retorno;
  }

