const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

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

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).send(planet);
});

app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "Planet added successfully" });
});

app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const {name} = req.body
  planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p);
  res.status(201).json({ msg: "Planet edited successfully" });
});

app.delete("/api/planet/:id", (req, res) => {
  const { id } = req.params;
  planets = planets.filter(p => p.id !== Number(id))
  res.status(201).json({ msg: "Planet deleted successfully" });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on localhost:${process.env.PORT}`);
});
