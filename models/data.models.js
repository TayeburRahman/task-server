const mongoose = require("mongoose");

// model step: 1
const formModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is require"],
        },
        agree: {
            type: Boolean,
            required: [true, "agree is require"],
        },
        sectors: {
            type: Array,
            required: [true, "sectors data is require"],
        },
        user: {
            type: String,
            required: [true, "User Email address is require"],
        },
    }
);


module.exports = mongoose.model('form', formModel)
