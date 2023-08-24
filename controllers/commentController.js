const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const Month = require("../models/months");
const Post = require("../models/posts");
const Tag = require("../models/tags");
const Comment = require("../models/comments");

//get comment id
exports.comment_get = asyncHandler(async(req,res,next) => {
    const getComment = await Comment.findById(req.params.commentId)
        .populate()
        .exec();
    
        if(getComment === null) {
            const err = new Error("Comment not found");
            err.status = 404;
            return next(err);
        }
    
    res.json({
        comment: getComment,
        success:true
    })

});

//get all comments
exports.comments_get = asyncHandler(async(req,res,next) => {
    const getPost = await Post.findById(req.params.postId)
        .exec();
    
    if(getPost === null) {
        const err = new Error("Post not found");
        err.status = 404;
        return next(err);
    }

    const getComments = await Post.findById(req.params.postId,"comments")
        .sort({date: -1}) 
        .populate()
        .exec();
    
    res.json({
        comments: getComments,
        success:true
    })
});

//create comment
exports.comment_create = asyncHandler(async(req,res,next) => {
    const getPost = await Post.findById(req.body.postId)
        .exec();
    
    if(getPost === null) {
        const err = new Error("Post not found");
        err.status = 404;
        return next(err);
    }
    const comment = new Comment({
        postId: req.body.postId,
        author: req.body.author,
        comment: req.body.comment,
    })

    await comment.save();
    const newComments = getPost.comments;
    newComments.push(comment);
    await Post.findByIdAndUpdate(req.body.postId,{comments: newComments },{});

});

//update comment
exports.comment_update = asyncHandler(async(req,res,next) => {
    const comment = new Comment({
        author: req.body.author,
        date: req.body.date,
        post: req.body.post,
        comment: req.body.comment,
        _id: req.params.id,
    });
    await Comment.findByIdAndUpdate(req.params.id,comment,{});
});

//THIS DOES NOT WORK
exports.comment_delete = asyncHandler(async(req,res,next) => {
    await Comment.findByIdAndDelete(req.params.commentId);
});
