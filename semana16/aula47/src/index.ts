import app from "./app";
import {Response, Request} from "express";
import connection from "./connection";

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("TOPZERA") 
});

app.post("/actor", (req: Request, res: Response) => {
  connection.raw(`
    INSERT INTO
  Actor(name, salary, birth_date, gender)
VALUES
  (
    "${req.body.name}",
    "${req.body.salary}",
    "${req.body.birth_date}",
    "${req.body.gender}",
  ),`
  
  res.status(200).send("Ator criado!")
})