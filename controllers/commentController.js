const { body, validationResult } = require("express-validator");
const Comment = require("../models/comments");
const asyncHandler = require("express-async-handler");

//get comment id
exports.comment_get = asyncHandler(async(req,res,next) => {
    const getComment = await Comment.findById(req.params.commentId)
        .exec();
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
    res.json({
        comments: getComments,
        success:true
    })
    console.log(res.json);

});

//create comment
exports.comment_create = asyncHandler(async(req,res,next) => {
    const month = new Month({
        name: req.body.name,
        color: req.body.color,
        posts: []
    })
    await Month.save();
    res.redirect(post.url);
});

//update comment
exports.comment_update = asyncHandler(async(req,res,next) => {
    
});

//delete comment
exports.comment_delete = asyncHandler(async(req,res,next) => {
    
});
