const async = require('async');
const connecttion = require('../src/database.js');

exports.InsertTratamento = async (data) => {
  let query1 = 'INSERT INTO tratamentos SET ?';
  let post1 = {id_tratamento:0, id_paciente:data.id_paciente, descricao:data.titulotratamento, status:data.status, datalog:data.data};
  let retornoInsert;
  try{
    retornoInsert =  await connecttion.query(query1, post1);
  }
  catch (err) { console.log(err); return 5; }
  let query2 = 'INSERT INTO atendimentos SET ?';
  let post2 = {id_atendimento:0, id_tratamento:retornoInsert.insertId, id_profissional:data.id_profissional, data:data.data, horario:data.horario, duracao:data.duracao, queixa:data.queixa, quadrogeral:data.quadrogeral, trajetodor:data.trajetodor, intensidadedor:data.intensidadedor, tipodor:data.tipodor, evolucao:data.evolucao, agravante:data.agravante, atenuante:data.atenuante, tratamentoanterior:data.tratamentoanterior};
  try{
    let retorno =  await connecttion.query(query2, post2);
    if (retorno.affectedRows == 1 ) return 0;
    return 5;
  }
  catch (err) { console.log(err); return 5; }
}

exports.InsertAtendimento = async (data) => {
  let query1 = 'UPDATE tratamentos SET ? WHERE id_tratamento = ?';
  let post1 = {descricao:data.titulotratamento, status:data.status};
  try{
      await connecttion.query(query1, [post1, data.id_tratamento]);
  }
  catch (err) { console.log(err); return 5; }
  let query2 = 'INSERT INTO atendimentos SET ?';
  let post2 = {id_atendimento:0, id_profissional:data.id_profissional, id_tratamento:data.id_tratamento, data:data.data, horario:data.horario, duracao:data.duracao, queixa:data.queixa, quadrogeral:data.quadrogeral, trajetodor:data.trajetodor, intensidadedor:data.intensidadedor, tipodor:data.tipodor, evolucao:data.evolucao, agravante:data.agravante, atenuante:data.atenuante, tratamentoanterior:data.tratamentoanterior};
  try{
    let retorno =  await connecttion.query(query2, post2);
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

exports.SelectTratamentosPaciente = async (id_paciente) => {
  let query = 'SELECT * FROM tratamentos WHERE id_paciente=? ORDER BY datalog DESC';
  try{
  let rows = await connecttion.query(query, id_paciente);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectAtendimentosTratamento = async (id_tratamento) => {
  let query = 'SELECT pro.nome profissional, pac.nome paciente, t.descricao titulotratamento, t.status, t.id_paciente, a.* FROM atendimentos a INNER JOIN profissionais pro ON a.id_profissional=pro.id_profissional  INNER JOIN tratamentos t ON a.id_tratamento=t.id_tratamento  INNER JOIN pacientes pac ON pac.id_paciente=t.id_paciente WHERE  a.id_tratamento=? ORDER BY a.data DESC';
  try{
  let rows = await connecttion.query(query, id_tratamento);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectTratamento = async (id_tratamento) => {
  let query = 'SELECT * FROM tratamentos WHERE id_tratamento=?';
  try{
  let rows = await connecttion.query(query, id_tratamento);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}