const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');


const blogRoutes=require('./routes/blogRoutes');

//connect to mongodb server
const dbURI='mongodb+srv://Codess:Anshika123@blogsproject.nxcqo.mongodb.net/blogproject?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
        console.log("connected to the db");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

//register view engines
app.set('view engine','ejs');

//middleware and static files
app.use(express.static('public'));   //there should be the name of the folder which in this case is public
// app.use(morgan('dev'));
//to get data from form middleware 
app.use(express.urlencoded());

app.get('/',(req,res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


//blog routes in blog routes file
app.use(blogRoutes);


app.use('/', (req, res) => {
    res.status(404).render('404', { title: 'Error' });
});