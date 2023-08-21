const Post = require("../models/posts");
const asyncHandler = require("express-async-handler");

//create a post
exports.get_post_create = asyncHandler(async(req,res,next) => {

});

exports.post_post_create = asyncHandler(async(req,res,next) => {

});

//view all posts

exports.get_post_view_recent = asyncHandler(async(req,res,next) => {
    const postList = await Post.find({})
    .sort({date: -1})
    .limit(req.params.num)
    .exec();
    res.json({
        posts:postList,
        success:true
    });

});

exports.get_post_view_popular = asyncHandler(async(req,res,next) => {
    const postList = await Post.find({})
    .sort({views: -1})
    .limit(req.params.num)
    .exec();
    res.json({
        posts:postList,
        success:true
    });
});

exports.get_post_view_title = asyncHandler(async(req,res,next) => {
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

exports.get_post_view_publish = asyncHandler(async(req,res,next) => {
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

exports.get_post_view_unpublish = asyncHandler(async(req,res,next) => {
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

exports.post_post_view_id = asyncHandler(async(req,res,next) => {

});

//Update post

exports.get_post_update_id = asyncHandler(async(req,res,next) => {

});

exports.get_post_update_id_publish = asyncHandler(async(req,res,next) => {

});

exports.get_post_update_id_unpublish = asyncHandler(async(req,res,next) => {

});

exports.post_post_update_id = asyncHandler(async(req,res,next) => {

});

exports.post_post_update_id_publish = asyncHandler(async(req,res,next) => {

});

exports.post_post_update_id_unpublish = asyncHandler(async(req,res,next) => {

});

//Delete post

exports.get_post_delete = asyncHandler(async(req,res,next) => {

});

exports.post_post_delete = asyncHandler(async(req,res,next) => {

});