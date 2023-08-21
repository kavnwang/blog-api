const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    caption: {
        type:String,
        minLength:1
    },
    date: {
        type:Date,
        required:true,
        default: Date.now
    },
    month: {
        type:Month,
        required:true
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