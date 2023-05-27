const express = require("express");

const cntr = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schema, updateFavoriteSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", cntr.getAllContacts);

router.get("/:contactId", isValidId, cntr.getContactById);

router.post("/", validateBody(schema), cntr.createContact);

router.delete("/:contactId", isValidId, cntr.deleteContact);

router.put("/:contactId", isValidId, validateBody(schema), cntr.updateContact);

router.patch(
  "/:contactId/favourite",
  isValidId,
  validateBody(updateFavoriteSchema),
  cntr.updateFavorite
);

module.exports = router;
