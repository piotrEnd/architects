const express = require("express"); 
const app = express(); 

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res, next) => {
  res.render('index');
});

app.get("/about", (req, res, next) => {
    res.render('about');
});

app.get("/housing", (req, res, next) => {
  res.render('housing');
});

app.get("/commercial", (req, res, next) => {
  res.render('commercial');
});

app.get("/communal", (req, res, next) => {
  res.render('communal');
});

app.get("/interior", (req, res, next) => {
  res.render('interior');
});

app.get("/contact", (req, res, next) => {
  res.render('contact');
});

app.get('*', function(req,res){
    res.send('<h1>404! <br>page not found</h1>');
});

app.listen(3000, function(){
  console.log("server started..."); 
});