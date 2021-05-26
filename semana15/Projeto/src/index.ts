import express, { Response, Request } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

type extract = {
  value: number;
  date: string;
  description: string;
};

type user = {
  id: number,
  name: string;
  cpf: string;
  birth: string;
  balance: number;
  extract: extract[];
};

let users: user[] = [
  {
    id: 0,
    name: "Erica dos Santos",
    cpf: "30773633804",
    birth: "29/04/1980",
    balance: 0,
    extract: [
      {
        value: 50,
        date: "02/05/2021",
        description: "luminária do Santos",
      },
      {
        value: 100,
        date: "15/03/2021",
        description: "bolo de chocolate",
      },
    ],
  },
];

app.get("/user/balance", (req: Request, res: Response) => {
  try {
    const name = req.body.name as string;
    const cpf = req.body.cpf as string;
    const result = users.find((user) => {
      if (user.name.toLowerCase().includes(name.toLocaleLowerCase())) {
        return true;
      }
    });
    if (result && cpf === result.cpf) {
      res
        .status(200)
        .send({ name: result.name, cpf: result.cpf, balance: result.balance });
    } else {
      throw Error("user not found or invalid cpf");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put("/user/addBalance", (req: Request, res: Response) => {
  try {
    const name = req.body.name as string;
    const cpf = req.body.cpf as string;
    const balance = Number(req.body.balance);

    const result = users.find((user) => {
      if (user.name.toLowerCase().includes(name.toLocaleLowerCase())) {
        return true;
      }
    });

    if (result && cpf === result.cpf && balance > 0) {
    users[result.id].balance += balance;
    res.status(200).send({message: "Success!"})
    }else{
      throw Error ("user not found or invalid cpf");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Hello, World!");
});
