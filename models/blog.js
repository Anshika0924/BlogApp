const mongoose = require('mongoose');
const Schema=mongoose.Schema;  //constructor function

const blogSchema=new Schema({
    title: {
        type: String,
        required:true,
    },
    snippet:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
},{timestamps: true});  //so construction function se new object banana


//we are creating a model and model name should be capitalized
//the model method argument has name of the particular model and it is very oimp as it pluralizes it and then look for that collection inside the database
//the second argument is the name of the schema
const Blog=mongoose.model('Blog',blogSchema);

//export the model
module.exports=Blog;