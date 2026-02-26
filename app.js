const express = require("express");
const bodyParser = require("body-parser");
const contactDB = require("./models/contactDB");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// GET: Main List Page
app.get("/", function (req, res) {
  contactDB.getContacts(function (err, contacts) {
    if (err) {
      console.error(err);
      return res.status(500).send("Database Error");
    }
    res.render("listContacts", { contacts: contacts });
  });
});

// GET: Add Form
app.get("/add", function (req, res) {
  res.render("contactForm");
});

// POST: Handle Form Submission
app.post("/add", function (req, res) {
  const username = req.body.username;
  const email = req.body.email;

  contactDB.addContact(username, email, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving contact");
    }
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
