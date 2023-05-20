const express = require("express");

const cntr = require("../../controllers/contacts");

const router = express.Router();

router.get("/", cntr.getAllContacts);

router.get("/:contactId", cntr.getContactById);

router.post("/", cntr.createContact);

router.delete("/:contactId", cntr.deleteContact);

router.put("/:contactId", cntr.updateContact);

module.exports = router;
