import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

let users = [];


app.get("/users", (req, res) => {
  res.json(users);
});


app.post("/users", (req, res) => {
  const { name, email, dob } = req.body;
  const newUser = { name, email, dob };
  users.push(newUser);
  res.status(201).json(newUser);
});


app.put("/users/:email", (req, res) => {
  const { email } = req.params;
  const { name, dob } = req.body;

  const userIndex = users.findIndex((user) => user.email === email);
  if (userIndex !== -1) {
    users[userIndex] = { name, email, dob };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});


app.delete("/users/:email", (req, res) => {
  const { email } = req.params;
  users = users.filter((user) => user.email !== email);
  res.status(204).end();
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
