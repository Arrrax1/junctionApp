require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
    res.render("index");
});

app.post("/signin", function (req,res) {
    
});

app.post("/signup", function (req,res) {
    
});

app.listen(3032, function() {
    console.log("Server started on port 3032.");
});
