const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get('/',(req, res) =>{
    res.send("hi");
});

app.get('/home',(req, res) =>{
    res.render('home.ejs')
    });

// app.get('/style.css',(req, res) =>{
//         res.render(__dirname +"style.css");
//       });    

app.listen(3000,(req, res) => {
    console.log("listening on port 3000");
});