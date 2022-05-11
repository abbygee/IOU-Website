const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // People to charge to
  peoples: {
    type: Array,
    required: true,
  },
  // Display Name
  boughtByDisplay: {
    type: String,
    required: true,
  },
  // Username
  boughtByUser: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: false,
  },
}, {collection: 'itemCollection'});
// peoples should be an array of users that the purchaser wants to share cost with

// export model item with PurchaseSchema
module.exports = mongoose.model("item", ItemSchema);