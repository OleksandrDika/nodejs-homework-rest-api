const handleMongooseError = (error, data, next) => {
  error.status = 400;
  next();
};
module.export = handleMongooseError;