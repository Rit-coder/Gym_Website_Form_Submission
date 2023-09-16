// Complex routing se deal karne me help karta hai
const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//For serving static files

app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views',path.join(__dirname,'views'));

// Our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Shivam', message: 'Hello there! Congrats for making this far!!' })
});


app.get("/", (req,res)=>{
    res.status(200).send("This is the homepage of my first express app with Shivam");
});

app.get("/about", (req,res)=>{
    res.send("This is my first express app with Shivam welcome to this about page (get-hit)");
});

app.post("/about", (req,res)=>{
    res.send("This is my first express app with Shivam welcome to this about page (post-hit)");
});
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});