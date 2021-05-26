import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(2000, ()=>{
  console.log("O servidor tá top na porta 2000")
})

export default app;