const async = require('async');
const connecttion = require('../src/database.js');

exports.SelectFormularios = async () => {
  let query = 'SELECT * FROM formularios ORDER BY id_formulario';
  try{
  let rows = await connecttion.query(query);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}

exports.UpdateFormulario = async (id_formulario, tipo) => {
  let query = 'UPDATE formularios SET tipo=? WHERE id_formulario=?';
  try{
  let retorno = await connecttion.query(query, [tipo, id_formulario]);
  if (retorno.affectedRows == 1 ) return 0;
  return 5;
  } catch (err) { console.log(err); return 5; }
}

exports.InsertFormulario = async (data) => {
  let query = 'INSERT INTO formularios SET ?';
  let post = {id_formulario:data.id_formulario, tipo:data.tipo}
  try{
    let retorno =  await connecttion.query(query, post);
    if (retorno.affectedRows == 1 ) return 0;
    return 5;
  }
  catch (err) { console.log(err); return 5; }
}