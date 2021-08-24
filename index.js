//Import express
const { request, response } = require("express");
const express = require("express");
const app = express();
const cors = require('fs');
const ytdl = require('ytdl-core');



app.use(express.json());





//Static file
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/image', express.static(__dirname + 'public/image'))



app.set('view engine', 'ejs');

app.get('/',(req, res) =>{
    res.send("hi");
});

app.get('/home',(req, res) =>{
    res.render('home.ejs')
    });
// app.get("/videoInfo",async(req, res) =>{
//         const videoURL = request.query.video.videoURL;
//         const info = await ytdl.getInfo(videoURL);
//         response.status(200).json(info);
//     });

app.get('/download', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(res);
});


   

app.listen(9000,(req, res) => {
    console.log("listening on port 9000");
});