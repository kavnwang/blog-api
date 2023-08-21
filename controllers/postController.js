const { body, validationResult } = require("express-validator");
const Post = require("../models/posts");
const asyncHandler = require("express-async-handler");

//create a post

exports.post_create = asyncHandler(async(req,res,next) => {
    const post = new Post({

    })
    await post.save();
    res.redirect(post.url);
});

//view all posts

exports.posts_get_recent = asyncHandler(async(req,res,next) => {
    const postList = await Post.find({})
    .sort({date: -1})
    .limit(req.params.num)
    .exec();
    res.json({
        posts:postList,
        success:true
    });

});

exports.posts_get_popular = asyncHandler(async(req,res,next) => {
    const postList = await Post.find({})
    .sort({views: -1})
    .limit(req.params.num)
    .exec();
    res.json({
        posts:postList,
        success:true
    });
});

exports.posts_get_title = asyncHandler(async(req,res,next) => {
    const postList = await Post.find({
        "title": {$regex:req.params.title}
    })
    .sort({date: -1})
    .exec();
    res.json({
        posts:postList,
        success:true
    });
});

exports.posts_get_publish = asyncHandler(async(req,res,next) => {
    const postList = await Post.find({
        publish:true
    })
    .sort({date: -1})
    .limit(req.params.num)
    .exec();
    res.json({
        posts:postList,
        success:true
    });
});

exports.posts_get_unpublish = asyncHandler(async(req,res,next) => {
    const postList = await Post.find({
        publish:false
    })
    .sort({date: -1})
    .limit(req.params.num)
    .exec();
    res.json({
        posts:postList,
        success:true
    });
});

exports.post_get = asyncHandler(async(req,res,next) => {
    const post = await Post.findbyId(req.params.postId)
    .populate()
    .exec();
    res.json({
        posts:postList,
        success:true
    });
});

//Update post
exports.post_update = asyncHandler(async(req,res,next) => {

});

exports.post_publish = asyncHandler(async(req,res,next) => {

});

exports.post_unpublish = asyncHandler(async(req,res,next) => {

});

//Delete post


exports.post_delete = asyncHandler(async(req,res,next) => {

});