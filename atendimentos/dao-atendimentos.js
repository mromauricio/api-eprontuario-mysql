const async = require('async');
const connecttion = require('../src/database.js');

exports.InsertAtendimento = async (data) => {
  let query = 'INSERT INTO atendimentos SET ?';
  let post = {id_atendimento:0, id_paciente:data.id_paciente, id_profissional:data.id_profissional, data:data.data, horario:data.horario, duracao:data.duracao, queixa:data.queixa, trajetodor:data.trajetodor, intensidadedor:data.intensidadedor, tipodor:data.tipodor, evolucao:data.evolucao, agravante:data.agravante, atenuante:data.atenuante, tratamentoanterior:data.tratamentoanterior};
  try{
      let retorno =  await connecttion.query(query, post);
      if (retorno.affectedRows == 1 ) return 0;
      return 5;
  }
  catch (err) { console.log(err); return 5; }
}

exports.UpdateAtendimento = async (data) => {
  let query = 'UPDATE atendimentos SET ? WHERE id_atendimento = ?';
  let post = {data:data.data, horario:data.horario, duracao:data.duracao, queixa:data.queixa, trajetodor:data.trajetodor, intensidadedor:data.intensidadedor, tipodor:data.tipodor, evolucao:data.evolucao, agravante:data.agravante, atenuante:data.atenuante, tratamentoanterior:data.tratamentoanterior};
  try{
      let retorno =  await connecttion.query(query, [post, data.id_atendimento]);
      if (retorno.affectedRows == 1 ) return 0;
      return 5;
  }
  catch (err) { console.log(err); return 5; }
}

exports.SelectAtendimentosPaciente = async (id_paciente) => {
  let query = 'SELECT id_atendimento,id_paciente,data,queixa,evolucao FROM atendimentos WHERE id_paciente=? ORDER BY data desc';
  try{
  let rows = await connecttion.query(query, id_paciente);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectAtendimento = async (id_paciente, id_atendimento) => {
  let query = 'SELECT p.nome profissional, pc.nome paciente, a.* FROM atendimentos a INNER JOIN profissionais p ON a.id_profissional=p.id_profissional INNER JOIN pacientes pc ON a.id_paciente=pc.id_paciente WHERE  a.id_paciente=? and a.id_atendimento=?';
  try{
  let rows = await connecttion.query(query, [id_paciente, id_atendimento]);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}