const express = require("express");
const contactDB = require("./models/contactDB");

const app = express();

//*** Middleware */
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// GET: Main List Page
app.get("/", function (req, res) {
  contactDB.getContacts(function (err, contacts) {
    res.render("listContacts", { contacts: contacts });
  });
});

// GET: Add Form
app.get("/add", function (req, res) {
  res.render("contactForm");
});

// POST: Handle Form Submission
app.post("/add", function (req, res) {
  let userData=[];
  userData.push(req.body.username);
  userData.push(req.body.email);
  contactDB.addContact(userData, function (err, result) {
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
