const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema({
    name: {
        type:String
    },
    contentType: {
        type:String
    },
    data: {
        type: Buffer
    }
});

module.exports = mongoose.model('Photo',photoSchema);