const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'baymhdu1qosms5hrjsyg-mysql.services.clever-cloud.com',
  user: 'uvlgqgizzpsj5eyr',
  password: 'iJJ5mKdzxfrFP5jTrqhA',
  database: 'baymhdu1qosms5hrjsyg',
  multipleStatements: true
  });
  mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('¡Base de datos conectada!');
  }
});

module.exports = mysqlConnection;