import Card from "./Card.js";

const createCardMongo = (cardData) => {
  let card = new Card(cardData);
  return card.save();
};

const getAllCardsMongo = () => {
  return Card.find();
};
const getCardByIdMongo = (id) => {
  return Card.findById(id);
};
const getCardByBizNumberMongo = (bizNumber) => {
  return Card.findOne({ bizNumber });
};

const getAllMyCardsMongo = (user_id) => {
  return Card.find({ user_id });
};

const updateLikeCardMongo = (id, likes) => {
  return Card.findByIdAndUpdate(id, { likes }, { new: true });
};

const updateCardMongo = (id, cardData) => {
  return Card.findByIdAndUpdate(id, cardData, { new: true });
};

const deleteCardMongo = (id) => {
  return Card.findByIdAndDelete(id);
};
export {
  createCardMongo,
  getAllCardsMongo,
  getCardByIdMongo,
  getCardByBizNumberMongo,
  getAllMyCardsMongo,
  updateCardMongo,
  deleteCardMongo,
  updateLikeCardMongo,
};
