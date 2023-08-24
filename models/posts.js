const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
        type:String,
        default:""
    },
    title: {
        type:String,
        default:""
    },
    subtitle: {
        type:String
    },
    text: {
        type:String,
        default: ""
    },
    date: {
        type:Date,
        required:true,
        default: Date.now
    },
    month: {
        type:Schema.Types.ObjectId,
        ref: 'Month',
        //required:true
    },
    comments: {
        type: [Schema.Types.ObjectId], 
        ref: 'Comment',
        default:[]
    },
    tags: {
        type: [Schema.Types.ObjectId], 
        ref: 'Tag',
        default:[]
    },
    views: {
        type:Number,
        required:true,
        default:0
    },
    images: {
        type: [Schema.Types.ObjectId],
        ref: 'Image',
        default:[]
    },
    publish: {
        type:Boolean,
        required:true,
        default:false
    }
});

postSchema.virtual("url").get(function() {
    return `/posts/${this._id}`;
});

module.exports = mongoose.model('Post',postSchema);