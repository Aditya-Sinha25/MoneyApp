const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/assignment1');

//making the connection with the database.
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));
db.once('open',function(){
    console.log("Connected to the DataBase::MongoDB");
});

module.exports =db;