const express = require("express");
const app = express();
const morgan = require('morgan')
require('dotenv').config()


app.use(morgan('dev'));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});



let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];
