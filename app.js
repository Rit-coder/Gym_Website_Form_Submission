// Complex routing se deal karne me help karta hai
const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFFS

app.use('/static', express.static('static'));
// form submitted data ko express tak laane ke liye.
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views',path.join(__dirname,'views')); // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This game requires a lot of patience and that is the beauty!!"
    const params = {"title": 'Fitness is not just a task...its a lifestyle',"content": con};
    res.status(200).render('index.pug',params);
});


//Form submit karane ke liye
app.post('/', (req, res) => {
    //console.log(req.body);
    naam = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    
    let outputToWrite = `the name of the client is ${naam}, ${age} year old, ${gender}, residing at ${address}. More about him/her ${more}\n`;
    fs.appendFileSync('Form_Data.txt', outputToWrite);
    const params = {"message": 'Your form has been submitted successfully'};
    res.status(200).render('index.pug',params);
});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});