const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "csce20303user",
  password: "csce20303pass",
  database: "csce20303",
  connectionLimit: 10,
});


function getContacts(callback) {
  const sql = "SELECT * FROM contacts";
  pool.execute(sql, function (err, result, fields) {
    callback(err,result,fields);
  });
}

function addContact(userData, callback) {
  const sql = "INSERT INTO contacts (username, email) VALUES (?, ?)";
  pool.execute(sql, userData, function (err, result, fields) {
    callback(err, result, fields);
  });
}

module.exports = {
  getContacts,
  addContact
};
