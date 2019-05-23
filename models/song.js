var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

var songSchema = new Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    album: String,
    tags: [{type: String}],
    link: String,
    comments: [commentSchema]
}, {
    timestamps: true
});

