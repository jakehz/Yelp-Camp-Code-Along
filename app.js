var express = require("express");
var app = express();

// set templates to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    
});
app.listen(8000, ()=> {
    console.log("The YelpCamp server has started");
});