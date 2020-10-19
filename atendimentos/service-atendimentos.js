
var async = require('async');
const daoAtendimentos = require('./dao-atendimentos.js');

exports.RuleInsertAtendimento = async (data) => {
  // if (data.data.length!=0){ 
  // let dataTemp = data.data.split('/');
  // data.data = `${dataTemp[2]}-${dataTemp[0]}-${dataTemp[1]}`;
  // }
  // else data.data = null;
  if (await daoAtendimentos.InsertAtendimento(data) == 0) return 0;
  return 5;
}