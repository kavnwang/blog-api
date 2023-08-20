const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: {
        type:String,
        required:true,
        minLength:1
    },
    color: {
        type:String,
        default:"pink"
    },
    posts: {
        type: [Schema.Types.ObjectId], 
        ref: 'Post',
        default:[]
    }
});

module.exports = mongoose.model('Tag',tagSchema);