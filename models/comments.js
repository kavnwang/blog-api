const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post: {
        type:Schema.Types.ObjectId, 
        ref:'Post'
    },
    comment: {
        type:String,
        required:true,
        minLength:1
    },
    date: {
        type:Date,
        required:true,
        default: Date.now
    },
    author: {
        type:String,
        reqiured:true,
        default: "Visitor"
    }

});

module.exports = mongoose.model('Comment', commentSchema);