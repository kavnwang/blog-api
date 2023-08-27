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
    const tagList = await Tag.findOne({name: req.params.name})
    .populate()
    .exec();

    res.json({
        tags:tagList,
        success:true
    });
});

exports.add_post_tag = asyncHandler(async(req,res,next) => {
    const tag = await Tag.findById(req.params.tag)
    .populate()
    .exec();
    const newPosts = [];
    tag.posts.forEach(function(u) {
        newPosts.push(u);
    });
    newPosts.push(await Post.findById(req.params.post));
    await Tag.findByIdAndUpdate(req.params.tag,{posts: newPosts});
    res.json({
        success:true
    });
});

//create tag

exports.create_tag = asyncHandler(async(req,res,next) => {
    const newTag = new Tag({
        name: req.body.name,
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
    const getTag = await Tag.findById(req.params.tag)
    .populate()
    .exec();


    if(getTag === null) {
        const err = new Error("Tag not found");
        err.status = 404;
        return next(err);
    }
    getTag.posts.forEach(function(u) {
        const removeTag = [];
        for(let i = 0;i < u.tags.length;i++) {
            if(u.tags[i] != getTag) {
                removeTag.push(u.tags[i]);
            }
        }
        Post.findByIdAndUpdate(u,{tags: removeTag});
    });

    await Tag.findByIdAndDelete(req.params.tag);
});

//edit tag
exports.update_tag = asyncHandler(async(req,res,next) => {
    const getTag = await Tag.findById(req.params.tag)
    .exec();


    if(getTag === null) {
        const err = new Error("Tag not found");
        err.status = 404;
        return next(err);
    }

    const updatedTag = await Tag.findByIdAndUpdate(req.params.tag,{name: req.body.name},{});

    res.json({tag: updatedTag});

});