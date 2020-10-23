
var async = require('async');
const daoAtendimentos = require('./dao-atendimentos.js');

exports.RuleInsertAtendimento = async (data) => {
  if (await daoAtendimentos.InsertAtendimento(data) == 0) return 0;
  return 5;
}

exports.RuleUpdateAtendimento = async (data) => {
  if (await daoAtendimentos.UpdateAtendimento(data) == 0) return 0;
  return 5;
}

exports.RuleSelectAtendimentosPaciente = async (query) => {
  let retorno = await daoAtendimentos.SelectAtendimentosPaciente(query)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}

exports.RuleSelectAtendimento = async (id_paciente, id_atendimento) => {
  let retorno = await daoAtendimentos.SelectAtendimento(id_paciente, id_atendimento)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}