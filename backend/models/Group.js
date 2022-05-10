const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
  // Members of the group
  members: {
    type: Array,
    required: true,
  },
  // Array of item objects
  items: {
    type: Array,
    required: true,
  },
}, {collection: 'groupsCollection'});

module.exports = mongoose.model("group", GroupSchema);