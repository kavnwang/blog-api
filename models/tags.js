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

tagSchema.virtual("url").get(function() {
    return `/tags/${this._id}`;
});
module.exports = mongoose.model('Tag',tagSchema);