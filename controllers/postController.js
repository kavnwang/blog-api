const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const Month = require("../models/months");
const Post = require("../models/posts");
const Tag = require("../models/tags");
const Comment = require("../models/comments");

//create a post

exports.post_create = asyncHandler(async(req,res,next) => {
    console.log(req.body.author);
    const post = new Post({
        author: req.body.author,
        title:req.body.title,
        text: req.body.text,
        date: Date.now(),
        //month: create month if there isn't one
    })
    await post.save();
});

//view all posts

exports.posts_get_recent = asyncHandler(async(req,res,next) => {
    const numDocuments = req.params.num;
    if(req.params.num === null) {
        numDocuments = Post.countDocuments();
    }
    const postList = await Post.find({})
    .sort({date: -1})
    .limit(numDocuments)
    .exec();
    res.json({
        posts:postList,
        success:true
    });
    console.log(res.json);
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
    console.log(res.json);

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
    console.log(res.json);

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
    console.log(res.json);

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
    console.log(res.json);

});

exports.post_get = asyncHandler(async(req,res,next) => {
    const getPost = await Post.find({_id: req.params.postId})
    .populate()
    .exec();

    if(getPost === null) {
        const err = new Error("Post not found");
        err.status = 404;
        return next(err);
    }

    res.json({
        post:getPost,
        success:true
    });

});

//Update post
exports.post_update = asyncHandler(async(req,res,next) => {
    const post = new Post({
        author: req.body.author,
        date: req.body.date,
        post: req.body.post,
        comment: req.body.comment,
        _id: req.params.id,
        publish: req.params.publish,
    });
    const updatedPost = await Post.findByIdAndUpdate(req.params.id,comment,{});

});

//Delete post


exports.post_delete = asyncHandler(async(req,res,next) => {
    await Post.findByIdAndDelete(req.body._id);
});