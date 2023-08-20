/*
name
date
title
text
imgs
id
tags
postviews
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
        type:String,
        required:true,
        minLength:1,
        default:"Kevin Wang"
    },
    text: {
        type:String,
        required:true,
        minLength:1
    },
    timeStamp: {
        type:Date,
        required:true,
        default: Date.now
    },
    user: {
        type:String,
        reqiured:true,
        default: "Visitor"
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
    postViews: {
        type:Number,
        required:true,
        default:0
    },
    images: {
        type: [Schema.Types.ObjectId],
        ref: 'Image',
        default:[]
    }
});

module.exports = mongoose.model('Post',postSchema);