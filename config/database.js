var mongoose = require('mongoose');

//Atlas mongodb+srv://mike:<password>@songs-esqk5.mongodb.net/test?retryWrites=true

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

//mongoose.connect('mongodb://localhost/songs',

var db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});