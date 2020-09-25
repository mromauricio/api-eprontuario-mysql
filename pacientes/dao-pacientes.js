const async = require('async');
const connecttion = require('../database.js');

exports.InsertPaciente = async (data) => {
  try{
  let retorno =  await connecttion.query(`INSERT INTO pacientestemp (id, nome, cpf) VALUES (0,'${data.nome}','${data.cpf}')`);
  if (retorno.affectedRows == 1 ) return 0;
  return 1;
  }
  catch { console.log(err); return 1; }
}

exports.SelectPacienteNome = async (query) => {
  console.log('[CONSULTA NOME] ', query);
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientestemp WHERE nome LIKE '${query}'`);
  console.log(rows);
  return rows;
  } catch{ console.log(err); return 1;  }
}

