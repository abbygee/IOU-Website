const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  // contains usernames of people in your group INCLUDING YOU
  myGroup: {
    type: Array,
    required: true,
  },
  myItems: {
    type: Array,
    required: false,
  }
}, {collection: 'authCollection'});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);