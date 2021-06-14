import { Request, Response } from "express";
import deleteUserBusiness from "../business/deleteUserBusiness";
import { deleteUserById } from "../data/deleteUserById";

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    await deleteUserBusiness(id);

    res.status(200).send({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
};
