const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayname: {
    type: String,
    required: true,
  },
  myGroups: {
    type: Array,
    required: false,
  },
  myItems: {
    type: Array,
    required: false,
  }
}, {collection: 'authCollection'});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);