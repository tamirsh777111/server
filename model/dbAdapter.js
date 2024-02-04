import connectToMongo from "./mongodb/dbConnect.js";
import { createUser as createUserMongo } from "./mongodb/users/userService.js";
import { createCard as createCardMongo } from "./mongodb/cards/cardService.js";
import normalizeUser from "./../normalize/user.normalize.js";
import normalizeCard from "./../normalize/card.normalize.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
};

const createUser = (user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return createUserMongo(user);
  }
};

const createCard = (card) => {
  card = normalizeCard(card);
  if (DB === "mongo") {
    return createCardMongo(card);
  }
};

export default connectToDb;
export { createUser, createCard };
