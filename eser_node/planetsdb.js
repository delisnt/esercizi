const express = require("express");
const app = express();
const morgan = require("morgan");
import { create, deleteById, getAll, getOneById, updateById} from './planets'
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

app.get("/api/planets", getAll );

app.get("/api/planets/:id", getOneById );

app.post("/api/planets", create );

app.put("/api/planets/:id", updateById );

app.delete("/api/planet/:id", deleteById );

app.listen(process.env.PORT, () => {
  console.log(`Listening on localhost:${process.env.PORT}`);
});
