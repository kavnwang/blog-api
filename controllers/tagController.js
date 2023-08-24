const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const Month = require("../models/months");
const Post = require("../models/posts");
const Tag = require("../models/tags");
const Comment = require("../models/comments");
const { trusted } = require("mongoose");

//view posts with a tag
exports.get_tag = asyncHandler(async(req,res,next) => {
    const getTag = await Tag.findById(req.params.tag)
    .populate()
    .exec();
 
    if(getTag === null) {
        const err = new Error("Tag not found");
        err.status = 404;
        return next(err);
    }
    res.json({
        tag: getTag,
        success:true
    })
});

//view all tags
exports.get_tags = asyncHandler(async(req,res,next) => {
    const tagList = await Tag.find({})
    .sort({name: 1})
    .exec();

    res.json({
        tags:tagList,
        success:true
    });
});

exports.get_tag_name = asyncHandler(async(req,res,next) => {
    const tagList = await Tag.find({name: req.params.name})
    .sort({name: 1})
    .exec();

    res.json({
        tags:tagList,
        success:true
    });
});

//create tag

exports.create_tag = asyncHandler(async(req,res,next) => {
    const newTag = new Tag({
        name: req.body.name,
        color: req.body.color,
        posts: []
    });
    await newTag.save();
    res.json({  
        tag: newTag,
        success:true
    })
});

//delete tag

exports.delete_tag = asyncHandler(async(req,res,next) => {
    await Tag.findByIdAndDelete(req.body._id);
});

//edit tag
exports.update_tag = asyncHandler(async(req,res,next) => {
    const tag = new Tag({
        name: req.body.name,
        color: req.body.color,
        posts: req.body.posts,
        _id: req.body._id,
    }); 
    await Tag.findByIdAndUpdate(req.body._id);
});