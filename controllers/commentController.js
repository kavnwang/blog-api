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
    
    console.log(res.json);

});

//get all comments
exports.comments_get = asyncHandler(async(req,res,next) => {
    const getComments = await Post.findById(req.params.postId, "comments")
        .sort({date: 1})
        .exec();
    
    if(getComments === null) {
        const err = new Error("Post not found");
        err.status = 404;
        return next(err);
    }
    
    res.json({
        comments: getComments,
        success:true
    })
    console.log(res.json);

});

//create comment
exports.comment_create = asyncHandler(async(req,res,next) => {
    const comment = new Comment({
        post: req.body.postId,
        comment: req.body.comment,
    })
    await Comment.save();

    res.redirect(post.url);
    console.log(res.json);

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

//delete comment
exports.comment_delete = asyncHandler(async(req,res,next) => {
    await Post.findByIdAndDelete(req.body._id);
});
