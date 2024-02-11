import express from "express";
import {
  getAllCardsController,
  getCardByIdController,
} from "../../controllers/cards.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
const router = express.Router();

//http://localhost:3030/api/cards
router.get("/", getAllCardsController);

router.get("/:id", objectIdParamsValidationMiddleware, getCardByIdController);

export default router;
