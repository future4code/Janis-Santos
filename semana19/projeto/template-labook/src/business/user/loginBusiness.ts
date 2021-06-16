import { compare } from "bcryptjs";
import { getUser } from "../../data/user/getUser";
import { generateToken } from "../../middleware/tokenManager";
import { loginDTO, user } from "../../model/user/userModel";

export const loginBusiness = async (
  email: string,
  password: string
): Promise<loginDTO> => {
  let message = "Success!";
  if (!email || !password) {
    message = '"email" and "password" must be provided';
    throw new Error(message);
  }
  const user = await getUser(email);

  const passwordIsCorrect: boolean = await compare(password, user.password);

  if (!passwordIsCorrect) {
    message = "Invalid credentials";
    throw new Error(message);
  }

  const token: string = generateToken({
    id: user.id,
  });

  return { message, token };
};
