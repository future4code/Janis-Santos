import express, { Express, Request, Response } from "express";
import cors from "cors";
import { login } from "./controller/user/login";
import { signup } from "./controller/user/signup";
import { getPostById } from "./controller/post/getPostById";
import { createPost } from "./controller/post/createPost";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users/signup", signup);
app.post("/users/login", login);

app.post("/posts/create", createPost);
app.get("/posts/:id", getPostById);

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
