const express = require("express");

const cntr = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schema, updateFavoriteSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, cntr.getAllContacts);

router.get("/:contactId", authenticate, isValidId, cntr.getContactById);

router.post("/", authenticate, validateBody(schema), cntr.createContact);

router.delete("/:contactId", authenticate, isValidId, cntr.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schema),
  cntr.updateContact
);

router.patch(
  "/:contactId/favourite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  cntr.updateFavorite
);

module.exports = router;
