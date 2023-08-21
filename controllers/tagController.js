const Tag = require("../models/tags");
const asyncHandler = require("express-async-handler");

//view posts with a tag
exports.get_tag_id = asyncHandler(async(req,res,next) => {
    const selectedPosts = await Post.find({
    tag: req.params.tag
    },"posts")
    .sort({date: -1})
    .exec();
});

//view all tags
exports.get_tag_list = asyncHandler(async(req,res,next) => {
    const tagList = await Tag.find({})
    .sort({name: 1})
    .exec();
    res.json({
        tag:tagList,
        success:true
    });
});

//create tag
exports.get_create_tag = asyncHandler(async(req,res,next) => {
    
});

exports.post_create_tag = asyncHandler(async(req,res,next) => {
    
});

//delete tag

exports.get_delete_tag = asyncHandler(async(req,res,next) => {
    
});

exports.post_delete_tag = asyncHandler(async(req,res,next) => {
    
});

//edit tag
exports.get_update_tag = asyncHandler(async(req,res,next) => {
    
});

exports.post_update_tag = asyncHandler(async(req,res,next) => {
    
});