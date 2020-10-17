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
  let query = 'DELETE FROM pacientes WHERE id_paciente = ?'
  try{
    let retorno = await connecttion.query(query, id);
    return retorno;
  } catch (err) { console.log(err);  }
}
////////////////////////////////////////////

exports.InsertPaciente = async (data) => {
  let query = 'INSERT INTO pacientes SET ?';
  let post = {id_paciente: 0, nome:data.nome, menor:data.menor, responsavel:data.responsavel, cpfresp:data.cpfresp, cpf:data.cpf, cns:data.cns, registro:data.registro, nacionalidade:data.nacionalidade, nascimento:data.nascimento, genero:data.genero, tel:data.tel, cel:data.cel, whatsapp:data.whatsapp, email:data.email, endereco:data.endereco, cep:data.cep, bairro:data.bairro, uf:data.uf, cidade:data.cidade, historico:data.historico, medicamento:data.medicamento, cirurgia:data.cirurgia, trauma:data.trauma, ativo:data.ativo};
  try{
      let retorno =  await connecttion.query(query, post);
      if (retorno.affectedRows == 1 ) return 0;
      return 5;
  }
  catch (err) { console.log(err); return 5; }
}

exports.SelectPacienteNome = async (nome) => {
  let query = 'SELECT * FROM pacientes WHERE nome LIKE ? ORDER BY nome';
  try{
  let rows = await connecttion.query(query, nome);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.UpdatePaciente = async (idSearch, data) => {
  let query = 'UPDATE pacientes SET ? WHERE id_paciente = ?';
  let post = {nome:data.nome, menor:data.menor, responsavel:data.responsavel, cpfresp:data.cpfresp, cpf:data.cpf, cns:data.cns, registro:data.registro, nacionalidade:data.nacionalidade, nascimento:data.nascimento, genero:data.genero, tel:data.tel, cel:data.cel, whatsapp:data.whatsapp, email:data.email, endereco:data.endereco, cep:data.cep, bairro:data.bairro, uf:data.uf, cidade:data.cidade, historico:data.historico, medicamento:data.medicamento, cirurgia:data.cirurgia, trauma:data.trauma, ativo:data.ativo};
  try{
      let retorno = await connecttion.query(query, [post, idSearch]);
      if (retorno.affectedRows == 1) return 0;
      return 2
  } catch (err) { console.log(err); return 5;  } 
}

exports.UpdatePacienteDatalog = async (idSearch) => {
  let query = 'UPDATE pacientes SET datalog=current_timestamp WHERE id_paciente = ?';
  try{
      let retorno = await connecttion.query(query, idSearch);
      if (retorno.affectedRows == 1) return 0;
      return 2
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectPacienteCpf = async (cpf) => {
  let query = 'SELECT * FROM pacientes WHERE cpf LIKE ?';
  try{
  let rows = await connecttion.query(query, cpf);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectPacienteCpfResp = async (cpfresp) => {
  let query = 'SELECT * FROM pacientes WHERE cpfresp LIKE ?';
  try{
  let rows = await connecttion.query(query, cpfresp);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.SelectPacienteCns = async (cns) => {
  let query = 'SELECT * FROM pacientes WHERE cns LIKE ?';
  try{
  let rows = await connecttion.query(query, cns);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}  

exports.SelectPacienteRegistro = async (registro) => {
  let query = 'SELECT * FROM pacientes WHERE registro LIKE ?';
  try{
  let rows = await connecttion.query(query, registro);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}  