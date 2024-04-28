const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://divinelord112:tDft2D2gysAXpzES@mydb.o9csm4z.mongodb.net/"
);
const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
  tasks: [
    String
  ],
});
 module.exports = {
    User:User
 }