const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Oleksandr:dnYENz6BdzRy2CuZ@cluster0.gwxz0jr.mongodb.net/contacts_reader?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
