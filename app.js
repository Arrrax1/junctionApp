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
    const email = req.body.signin_email;
    const password = req.body.signin_password;
    /*Auth Function*/
    //on success Redirect to Chat.ejs
    console.log(email,password)
    res.render("chat");
});

app.post("/signup", function (req,res) {
    const fullname = req.body.signup_fullname;
    const email = req.body.signup_email;
    const password = req.body.signup_password;
    const password2 = req.body.signup_confirm;
    /*Sign Up Function*/
    //on success Redirect to Login
    console.log(fullname,email,password);
    res.redirect("/");
});

app.listen(3032, function() {
    console.log("Server started on port 3032.");
});
