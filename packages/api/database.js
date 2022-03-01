const mysql = require('mysql');

const sql = mysql.createConnection({
  host: 'mysql.studev.groept.be',
  user: 'a21iot16',
  password: '7eG8x5Xp',
  database: 'a21iot16'
});

function connect(){
  sql.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
}

async function query(queryString){
  connect();

  sql.query(queryString, (err,rows) => {
    if(err) throw err;
    console.log('Data received from Db:');
    console.log(rows);
  });

  sql.end((err) => {});
}

module.exports = {
  query: query,
}