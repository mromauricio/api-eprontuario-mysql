const async = require('async');
const connecttion = require('../src/database.js');

exports.InsertAtendimento = async (data) => {
  let query = 'INSERT INTO atendimentos SET ?';
  // FALTA campo ORDEM oriundo do Frontend
  let post = {id_atendimento:0, id_paciente:data.id_paciente, id_profissional:data.id_profissional, ordem:99, 
  data:data.data, horario:data.horario, duracao:data.duracao, queixa:data.queixa, trajetodor:data.trajetodor,
intensidadedor:data.intensidadedor, tipodor:data.tipodor, evolucao:data.evolucao, agravante:data.agravante,
atenuante:data.atenuante, tratamentoanterior:data.tratamentoanterior};
  try{
      let retorno =  await connecttion.query(query, post);
      if (retorno.affectedRows == 1 ) return 0;
      return 5;
  }
  catch (err) { console.log(err); return 5; }
}

exports.SelectAtendimentosPaciente = async (id_paciente) => {
  let query = 'SELECT id_paciente,data,queixa,evolucao FROM atendimentos WHERE id_paciente=? ORDER BY data desc';
  try{
  let rows = await connecttion.query(query, id_paciente);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}