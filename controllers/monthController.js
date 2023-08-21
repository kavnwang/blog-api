const Month = require("../models/months");
const asyncHandler = require("express-async-handler");

//view posts with a tag
exports.get_month_list = asyncHandler(async(req,res,next) => {
    const monthList = await Month.find({})
        .sort({date: -1})
        .exec();
        res.json({
            months:monthList,
            success:true
        });
});

exports.get_month_posts = asyncHandler(async(req,res,next) => {

    const selectedPosts = await Post.find({
        year: req.params.year,
        month: req.params.month
    }, "posts")
        .sort({date: -1})
        .exec();
        res.json({
            posts:selectedPosts,
            success:true
        });
});
