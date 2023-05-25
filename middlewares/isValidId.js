const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../middlewares");

const isValidId = (res, req, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `${contactId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
