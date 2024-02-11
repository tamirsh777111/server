import { getAllCards, getCardById } from "../model/dbAdapter.js";
import handleError from "../utils/handleError.js";

const getAllCardsController = async (req, res) => {
  try {
    let cards = await getAllCards();
    res.json(cards);
  } catch (err) {
    console.log(err);
  }
};

const getCardByIdController = async (req, res) => {
  try {
    let cards = await getCardById(req.params.id);
    res.json(cards);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

export { getAllCardsController, getCardByIdController };
