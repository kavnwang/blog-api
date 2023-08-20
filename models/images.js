const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    caption: {
        type:String,
        minLength:1
    },
    timeStamp: {
        type:Date,
        required:true,
        default: Date.now
    },
    url: {
        type: String,
        required:true
    },
    post: {
        type: Schema.Types.ObjectId, 
        ref: 'Post'
    }
});

module.exports = mongoose.model('Image',imageSchema);