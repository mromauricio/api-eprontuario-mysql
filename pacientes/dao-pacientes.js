const async = require('async');
const connecttion = require('../database.js');

// exports.InsertPaciente = (data) => {
//   try{
//   connecttion.query(`INSERT INTO pacientestemp (id, nome, cpf) VALUES (0,'${data.nome}','${data.cpf}')`, function (error, results){});
//   } catch (err) { console.log(err); return 1;}  
//   return 0
// }



// exports.InsertPaciente =  (data) => {
//   let retorno =  connecttion.query(`INSERT INTO pacientestemp (id, nome, cpf) VALUES (0,'${data.nome}','${data.cpf}')`, function (error, results){
//     if (error) throw  new Error(error); 
//     else console.log('results.affectedRows -> ', results.affectedRows);
//   });
//   console.log('retorno -> ',retorno)
//   return 0
// }

exports.InsertPaciente = async (data) => {
  try{
  let retorno =  await connecttion.query(`INSERT INTO pacientestemp (id, nome, cpf) VALUES (0,'${data.nome}','${data.cpf}')`);
  if (retorno.affectedRows == 1 ) return 0;
  return 1;
  }
  catch {console.log(err); return 1; }
}

exports.MysqlReadPacienteNome = (query) => {
  console.log('[CONSULTA NOME] ', query);
  connecttion.query(`SELECT * FROM pacientestemp WHERE nome LIKE '${query}'`, function (error, results){
    if (error) throw error
    console.log('results -> ',results);
    return (results);
  });
}

// router.get('/nome', function(req, res){
//   connecttion.query(`SELECT * FROM pacientestemp WHERE nome LIKE '${req.query.nome}'`, function (error, results){
//     if (error) throw error
//     res.send(results.map(registro => ({id: registro.id, nome: registro.nome, cpf: registro.cpf})));
//   });
// });

exports.DBreadPacienteNome = async (query) => {
  console.log('[CONSULTA COMEÇA COM]  NOME: ', query);
  //query = '^'+query;  // regex ˆ significa - começa com
  let retorno = await Paciente.find({ $or:[
      { 'nome': query },
      { 'nome': query.normalize('NFD').replace(/[\u0300-\u036f]/g, "") }
      // { 'nome': { $regex: query, $options: 'i' }},
      // { 'nome': { $regex: query.normalize('NFD').replace(/[\u0300-\u036f]/g, ""), $options: 'i' }}
      ]},  function (err, result){
        if (err) return 1;
        if (result) return result; 
      });
 console.log ('[RETORNO CONSULTA] ', retorno) 
 if (retorno == 1) return 1;
 return retorno;
}