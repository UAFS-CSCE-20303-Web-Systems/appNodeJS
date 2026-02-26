const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "csce20303user",
  password: "csce20303pass",
  database: "csce20303",
  connectionLimit: 10,
});

// Using function declarations inside an object for export
function getContacts(callback) {
  const sql = "SELECT * FROM contacts";
  pool.query(sql, function (err, results) {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

function addContact(username, email, callback) {
  const sql = "INSERT INTO contacts (username, email) VALUES (?, ?)";
  pool.query(sql, [username, email], function (err, result) {
    if (err) return callback(err, null);
    callback(null, result);
  });
}

module.exports = {
  getContacts,
  addContact,
};
