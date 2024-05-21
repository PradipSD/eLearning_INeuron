const mongoose = require("mongoose");

const adminRegisterSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // 'this' refers to the document being validated
        return this.password === value;
      },
      message: "Password and Confirm Password must match",
    },
  },
});

const adminRegister = new mongoose.model("adminRegister", adminRegisterSchema);

module.exports = adminRegister;
