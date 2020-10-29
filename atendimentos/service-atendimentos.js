
var async = require('async');
const daoAtendimentos = require('./dao-atendimentos.js');

exports.RuleInsertTratamento = async (data) => {
  if (await daoAtendimentos.InsertTratamento(data) == 0) return 0;
  return 5;
}

exports.RuleInsertAtendimento = async (data) => {
  if (await daoAtendimentos.InsertAtendimento(data) == 0) return 0;
  return 5;
}

exports.RuleUpdateAtendimento = async (data) => {
  if (await daoAtendimentos.UpdateAtendimento(data) == 0) return 0;
  return 5;
}

exports.RuleSelectTratamentosPaciente = async (query) => {
  let retorno = await daoAtendimentos.SelectTratamentosPaciente(query)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}

exports.RuleSelectAtendimentosTratamento = async (id_tratamento) => {
  let retorno = await daoAtendimentos.SelectAtendimentosTratamento(id_tratamento)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}

exports.RuleSelectTratamento = async (query) => {
  let retorno = await daoAtendimentos.SelectTratamento(query)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}

exports.RuleSelectAtendimento = async (query) => {
  let retorno = await daoAtendimentos.SelectAtendimento(query)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}

exports.RuleSelectUltimoquadrogeral = async (query) => {
  let retorno = await daoAtendimentos.SelectUltimoquadrogeral(query)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}