const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: float,
    required: true,
  },
  peoples: {
    type: Array,
    required: false
  },
}, {collection: 'itemCollection'});
// peoples should be an array of users that the purchaser wants to share cost with

// export model item with PurchaseSchema
module.exports = mongoose.model("item", ItemSchema);