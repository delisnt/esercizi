const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

const getAll = (req, res) => {
  res.status(200).json(planets);
};

const getOneById = (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).send(planet);
};

const create = (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "Planet added successfully" });
};

const updateById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  res.status(201).json({ msg: "Planet edited successfully" });
};
const deleteById = (req, res) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(201).json({ msg: "Planet deleted successfully" });
};

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


export { create, deleteById, getAll, getOneById, updateById} 