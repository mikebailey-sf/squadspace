var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true},
    email: String,
    googleId: String,
    songs: [{type: Schema.Types.ObjectId, ref: 'Song'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);