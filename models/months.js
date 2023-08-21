const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monthSchema = new Schema({
    dateStart: {
        type:Date,
        required:true,
    },
    dateEnd: {
        type:Date,
        required:true
    },
    posts: {
        type: [Schema.Types.ObjectId], 
        ref: 'Post'
    }
});

module.exports = mongoose.model('Month',monthSchema);