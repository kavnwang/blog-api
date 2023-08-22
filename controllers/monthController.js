const { body, validationResult } = require("express-validator");

const Month = require("../models/months");
const Post= require("../models/posts");

const asyncHandler = require("express-async-handler");

//view posts with a tag
exports.months_get = asyncHandler(async(req,res,next) => {
    const monthList = await Month.find({})
        .sort({date: -1})
        .exec();

    
        res.json({
            months:monthList,
            success:true
        });
        console.log(res.json);

});

exports.month_get = asyncHandler(async(req,res,next) => {

    const getMonth = await Post.find({
        year: req.params.year,
        month: req.params.month
    })
        .sort({date: -1})
        .populate()
        .exec();


        if(getMonth === null) {
            const err = new Error("Month not found");
            err.status = 404;
            return next(err);
        }

        res.json({
            month:getMonth,
            success:true
        });
        console.log(res.json);

});
