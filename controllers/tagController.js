const { body, validationResult } = require("express-validator");
const Tag = require("../models/tags");
const asyncHandler = require("express-async-handler");

//view posts with a tag
exports.get_tag = asyncHandler(async(req,res,next) => {
    const selectedPosts = await Post.find({
    tag: req.params.tag
    },"posts")
    .sort({date: -1})
    .exec();
    res.json({
        posts: selectedPosts,
        success:true
    })
    console.log(res.json);
});

//view all tags
exports.get_tags = asyncHandler(async(req,res,next) => {
    const tagList = await Tag.find({})
    .sort({name: 1})
    .exec();
    res.json({
        tag:tagList,
        success:true
    });
    console.log(res.json);
});

//create tag

exports.create_tag = asyncHandler(async(req,res,next) => {
    const tag = new Tag({
        name: req.body.name,
        color: req.body.color,
        posts: []
    })
    await post.save();
    res.redirect(post.url);
});

//delete tag

exports.delete_tag = asyncHandler(async(req,res,next) => {
    
});

//edit tag
exports.update_tag = asyncHandler(async(req,res,next) => {
    
});