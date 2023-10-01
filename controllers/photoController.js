const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const multer = require('multer');

// Multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });


const Photo = require("../models/photos");

exports.photo_add = [upload.single('photo'),asyncHandler(async(req,res,next) => {
    
    console.log(req.file);
    const photo = new Photo({
        name: req.file.originalname,
        contentType: req.file.mimetype,
        data: req.file.buffer
    });

    await photo.save();
}),
];

exports.photo_get_all = asyncHandler(async(req,res,next) => {
    const photos = await Photo.find({})
    .exec();

    res.json({
        photos:photos,
        success:true
    });
});
