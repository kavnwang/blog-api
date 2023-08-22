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
    year: {
        type:String
    },
    month: {
        type:String
    },
    posts: {
        type: [Schema.Types.ObjectId], 
        ref: 'Post'
    }
});

monthSchema.virtual("url").get(function() {
    return `/year/${this.year}/month/${this.month}`;
});

module.exports = mongoose.model('Month',monthSchema);