const express = require("express");
const { connect } = require("http2");
const mysql2 = require("mysql2");
const app = express();
const port = 3000;
app.use(express.json());
const connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "blogapp",
});
connection.connect((err) => {
  if (err) {
    console.log("Connection failed", err);
  } else {
    console.log("Connected successfully");
  }
});
app.get("/users", (req, res) => {
  const name = "Marwan";
  connection.query(
    `
      SELECT * FROM users
    `,
    (err, queryResult) => {
      if (err) {
        console.log(err);
        res.json({ err });
      } else {
        console.log({ queryResult });
        res.json({ queryResult });
      }
    }
  );
});
app.post("/signup", (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const createUserQuery = `
    INSERT INTO
      users(first_name,last_name,email,password)
    VALUES
      (?,?,?,?)
  `;
  connection.execute(
    createUserQuery,
    [firstName, lastName, email, password],
    (err, val) => {
      if (err) {
        res.json({ err });
      } else {
        res.json({ message: "Account created successfuly", val });
      }
    }
  );
});
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  const createUserQuery = `
    SELECT
      email,password
    FROM
      users
    WHERE
      email = ? AND password = ?
  `;
  connection.execute(createUserQuery, [email, password], (err, val) => {
    if (err) {
      res.json({ err });
    } else {
      res.json({ message: "logged in successfuly", val });
    }
  });
});
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
