import { hashSync } from "bcryptjs";
import { insertUser } from "../../data/user/insertUser";
import { generateId } from "../../middleware/idGenerator";
import { generateToken } from "../../middleware/tokenManager";
import { signupDTO } from "../../model/user/userModel";

export const signupBusiness = async (
  name: string,
  email: string,
  password: string
): Promise<signupDTO> => {
  let message = "Success!";

  if (!name || !email || !password) {
    message = '"name", "email" and "password" must be provided';
    throw new Error(message);
  }

  const id: string = generateId();

  const cypherPassword = await hashSync(password);

  insertUser({ id, name, email, password });

  const token: string = generateToken({ id });
  return { message, token };
};
