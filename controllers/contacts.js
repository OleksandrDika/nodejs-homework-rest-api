const Contact = require("../models/contact");

// const Joi = require("joi");
// const contacts = require("../models/contacts");

// const { HttpError } = require("../helpers");

// const shema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

const getAllContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// const getContactById = async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const createContact = async (req, res, next) => {
//   try {
//     const { error } = shema.validate(req.body);
//     if (error) {
//       throw HttpError(400, "missing required name field");
//     }
//     const result = await contacts.addContact(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const deleteContact = async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.json({ message: "contact deleted" });
//   } catch (error) {
//     next(error);
//   }
// };

// const updateContact = async (req, res, next) => {
//   try {
//     const { error } = shema.validate(req.body);
//     if (error) {
//       throw HttpError(400, "missing fields");
//     }
//     const { contactId } = req.params;
//     const result = await contacts.updateContact(contactId, req.body);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  getAllContacts,
  // getContactById,
  // createContact,
  // deleteContact,
  // updateContact,
};
