var async = require('async');
const daoFormularios = require('./dao-formularios.js');

exports.RuleSelectFormularios = async () => {
  let retorno = await daoFormularios.SelectFormularios()
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}

exports.RuleUpdateFormulario = async (id, tipo) => {
  let retorno = await daoFormularios.UpdateFormulario(id, tipo)
  if (retorno == '') return 2;
  if (retorno == 5) return 5;
  return retorno;
}