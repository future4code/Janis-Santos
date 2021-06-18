import { Request, Response } from "express";
import { getPostBusiness } from "../../business/post/getPostBusiness";
import { connection } from "../../data/connection";
import { post } from "../../model/post/postModel";

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await getPostBusiness (id);
    res.status(200).send({ ... response });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};