var async = require('async');
const fs = require('fs'); // ou require('fs').promises;

exports.ReadHtmlFile = async (htmlSearch) => {
  let retorno;
   try{ 
   retorno = await fs.promises.readFile(htmlSearch);
   } catch (err) { console.log(err); retorno = 2;}
  return retorno; 
}