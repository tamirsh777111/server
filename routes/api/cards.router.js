import express from "express";
import {
  createCardController,
  getAllCardsController,
  getCardByIdController,
  getMyCardsController,
} from "../../controllers/cards.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isBizMiddleware from "../../middlewares/isBiz.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createCardValidation } from "../../validation/validationAdapter.js";
const router = express.Router();

router.get("/", getAllCardsController);

router.get("/my-cards", authMiddleware, getMyCardsController);

router.get("/:id", objectIdParamsValidationMiddleware, getCardByIdController);

router.post(
  "/",
  authMiddleware,
  isBizMiddleware,
  bodyValidationMiddleware(createCardValidation),
  createCardController
);

export default router;
