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
  let rows = await connecttion.query(query, [tipo, id_formulario]);
  return rows;
  } catch (err) { console.log(err); return 5;  }
}