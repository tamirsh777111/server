import express from "express";
import {
  createCardController,
  deleteCardController,
  getAllCardsController,
  getCardByIdController,
  getMyCardsController,
  patchBizNumberController,
  patchLikeController,
  updateCardController,
} from "../../controllers/cards.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isBizMiddleware from "../../middlewares/isBiz.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createCardValidation } from "../../validation/validationAdapter.js";
import adminOrBizMiddleware from "../../middlewares/adminOrBiz.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";

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

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isBizMiddleware,
  adminOrBizMiddleware,
  bodyValidationMiddleware(createCardValidation),
  updateCardController
);

router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  patchLikeController
);

router.patch(
  "/biz-number/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  patchBizNumberController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrBizMiddleware,
  deleteCardController
);

export default router;
