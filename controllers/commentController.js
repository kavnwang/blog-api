const Comment = require("../models/comments");
const asyncHandler = require("express-async-handler");

//get comment id
exports.get_comment_id = asyncHandler(async(req,res,next) => {
    const getComment = await Comment.findById(req.params.commentId)
        .exec();
    res.json({
        comment: getComment,
        success:true
    })
});

//get all comments
exports.get_comment_list = asyncHandler(async(req,res,next) => {
    const getComments = await Post.findById(req.params.postId, "comments")
        .sort({date: 1})
        .exec();
    res.json({
        comments: getComments,
        success:true
    })
});

//create comment
exports.get_comment_create = asyncHandler(async(req,res,next) => {
    
});
exports.post_comment_create = asyncHandler(async(req,res,next) => {
    
});

//update comment
exports.get_comment_update = asyncHandler(async(req,res,next) => {
    
});
exports.post_comment_update = asyncHandler(async(req,res,next) => {
    
});

//delete comment
exports.get_comment_delete = asyncHandler(async(req,res,next) => {
    
});

exports.post_comment_delete = asyncHandler(async(req,res,next) => {
    
});
