//blog routes
const express = require('express');

const Blog = require('../models/blog');
const router=express.Router();


router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt:-1})
    .then((result)=>{
        //we want to pass the data to the index view
        //it is expecting array of blogs so not changing  aything in the index files
        res.render('index',{title:' All Blogs', blogs:result})
    })
    .catch((err) => {
        console.log(err);
    })
});

router.post('/blogs',(req,res)=>{

    //acces to data coming from form submission
    //we will use middleware to pass the data in the workable format
    const blog=new Blog(req.body); //same thing we did in mongo file see
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.error(err);
    })
})


router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' })  //second argument is passing data in the view
})


router.get('/blogs/:id',(req, res)=>{
    const id=req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blog:result ,title:'Blog Details'});

    })
    .catch((err)=>{
        console.log(err);
    })
})


router.delete('/blogs/:id',(req, res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        //send jasson data as the details file me ajax request h
        res.json({redirect: '/blogs'})
    })
    .catch((err)=>{
        console.log(err);
    })
})







module.exports = router;