import { insertPost } from "../../data/post/insertPost";
import { generateId } from "../../middleware/idGenerator";
import { POST_TYPES } from "../../model/post/postModel";
import { getTokenData } from "../../middleware/tokenManager";
import { authenticationData } from "../../model/user/userModel";
import moment from "moment";

export const createPostBusiness = async (
  photo: string,
  description: string,
  type: POST_TYPES,
  token: string
): Promise<string> => {
  let message = "Success!";

  if (!photo || !description || !type || !token) {
    throw new Error(
      "Preencha os campos 'photo', 'description', 'type' e 'token'"
    );
  }
  if (type !== POST_TYPES.EVENT && type !== POST_TYPES.NORMAL) {
    throw new Error("O type deve ser 'normal' ou 'event'");
  }
  const tokenData: authenticationData = getTokenData(token);

  const id: string = generateId();

  await insertPost({
    id,
    photo,
    description,
    type,
    createdAt: moment().format("YYYY-MM-DD"),
    authorId: tokenData.id,
  });

  return message;
};
