const async = require('async');
const connecttion = require('../src/database.js');

//TEMP tests Postman //////////////////////
exports.SelectPostman = async () => { 
  try{
    let rows = await connecttion.query('SELECT * FROM pacientes');
    return rows;
  } catch (err) { console.log(err);  }
}
exports.DeletePostman = async (id) => { 
  try{
    let retorno = await connecttion.query(`DELETE FROM pacientes WHERE id_paciente = ${id}`);
    return retorno;
  } catch (err) { console.log(err);  }
}
////////////////////////////////////////////

exports.InsertPaciente = async (data) => {
  try{
      let retorno =  await connecttion.query(`INSERT INTO pacientes (id_paciente, nome, menor, responsavel, cpfresp, cpf, cns, registro, nacionalidade, nascimento, genero, tel, cel, whatsapp, email, endereco, cep, bairro, uf, cidade, historico, medicamento, cirurgia, trauma, ativo) VALUES (0,'${data.nome}','${data.menor}','${data.responsavel}','${data.cpfresp}',${data.cpf},${data.cns},${data.registro},'${data.nacionalidade}',${data.nascimento},'${data.genero}','${data.tel}','${data.cel}','${data.whatsapp}','${data.email}','${data.endereco}','${data.cep}','${data.bairro}','${data.uf}','${data.cidade}','${data.historico}','${data.medicamento}','${data.cirurgia}','${data.trauma}','${data.ativo}')`);
      if (retorno.affectedRows == 1 ) return 0;
      return 5;
  }
  catch (err) { console.log(err); return 5; }
}

exports.SelectPacienteNome = async (query) => {
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE nome LIKE '${query}' ORDER BY nome`);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.UpdatePaciente = async (idSearch, data) => {
  try{
      let retorno = await connecttion.query(`UPDATE pacientes SET nome='${data.nome}', menor='${data.menor}', responsavel='${data.responsavel}', cpfresp='${data.cpfresp}', cpf=${data.cpf}, cns=${data.cns}, registro=${data.registro}, nacionalidade='${data.nacionalidade}', nascimento = ${data.nascimento} , genero='${data.genero}', tel='${data.tel}', cel='${data.cel}', whatsapp='${data.whatsapp}', email='${data.email}', endereco='${data.endereco}', cep='${data.cep}', bairro='${data.bairro}', uf='${data.uf}', cidade='${data.cidade}', historico='${data.historico}', medicamento='${data.medicamento}', cirurgia='${data.cirurgia}', trauma='${data.trauma}', ativo='${data.ativo}' WHERE id_paciente = ${idSearch}`);
      if (retorno.affectedRows == 1) return 0;
      return 2
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectPacienteCpf = async (query) => {
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE cpf LIKE '${query}'`);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectPacienteCns = async (query) => {
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE cns LIKE '${query}'`);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}  

exports.SelectPacienteRegistro = async (query) => {
  try{
  let rows = await connecttion.query(`SELECT * FROM pacientes WHERE registro LIKE '${query}'`);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}  