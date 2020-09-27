const async = require('async');
const connecttion = require('../database.js');

exports.InsertPaciente = async (data) => {
  try{
      let retorno =  await connecttion.query(`INSERT INTO pacientes (_id, nome, menor, responsavel, cpfresp, cpf, cns, registro, nacionalidade, nascimento, genero, tel, cel, whatsapp, email, endereco, cep, bairro, uf, cidade, historico, medicamento, cirurgia, trauma) VALUES (0,'${data.nome}','${data.menor}','${data.responsavel}','${data.cpfresp}','${data.cpf}','${data.cns}','${data.registro}','${data.nacionalidade}',${data.nascimento},'${data.genero}','${data.tel}','${data.cel}','${data.whatsapp}','${data.email}','${data.endereco}','${data.cep}','${data.bairro}','${data.uf}','${data.cidade}','${data.historico}','${data.medicamento}','${data.cirurgia}','${data.trauma}')`);
      if (retorno.affectedRows == 1 ) return 0;
      return 1;
  }
  catch (err) { console.log(err); return 1; }
}

exports.SelectPacienteNome = async (query) => {
  console.log('[CONSULTA NOME] ', query);
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE nome LIKE '${query}'`);
  return rows;
  } catch (err) { console.log(err); return 1;  }
}

exports.UpdatePaciente = async (idSearch, data) => {
  console.log('[ID CONSULTA] ',idSearch);
  try{
      let retorno = await connecttion.query(`UPDATE pacientes SET nome='${data.nome}', menor='${data.menor}', responsavel='${data.responsavel}', cpfresp='${data.cpfresp}', cpf='${data.cpf}', cns='${data.cns}', registro='${data.registro}', nacionalidade='${data.nacionalidade}', nascimento = ${data.nascimento} , genero='${data.genero}', tel='${data.tel}', cel='${data.cel}', whatsapp='${data.whatsapp}', email='${data.email}', endereco='${data.endereco}', cep='${data.cep}', bairro='${data.bairro}', uf='${data.uf}', cidade='${data.cidade}', historico='${data.historico}', medicamento='${data.medicamento}', cirurgia='${data.cirurgia}', trauma='${data.trauma}'   WHERE _id LIKE ${idSearch}`);
      if (retorno.affectedRows == 1) return 0;
      return 1
  } catch (err) { console.log(err); return 1;  }
}

exports.SelectPacienteCpf = async (query) => {
  console.log('[CONSULTA CPF] ', query);
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE cpf LIKE '${query}'`);
  return rows;
  } catch (err) { console.log(err); return 1;  }
}

exports.SelectPacienteCns = async (query) => {
  console.log('[CONSULTA CNS] ', query);
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE cns LIKE '${query}'`);
  return rows;
  } catch (err) { console.log(err); return 1;  }
}  

exports.SelectPacienteRegistro = async (query) => {
  console.log('[CONSULTA REGISTRO] ', query);
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE registro LIKE '${query}'`);
  return rows;
  } catch (err) { console.log(err); return 1;  }
}  