var express = require("express");
var app = express();

app.use(express.urlencoded({extended: true}));

// set templates to EJS
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image:"https://photosforclass.com/download/pixabay-1846142?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c732d7ddd9044c05e_960.jpg&user=Pexels"}, 
        {name: "Yosemite", image:"https://photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732d7ddd9044c05e_960.jpg&user=Free-Photos"}, 
        {name: "Fallen Leaf Lake", image:"https://photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732d7ddd9044c05e_960.jpg&user=Pexels"}, 
    ];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
    campgrounds.push({name: req.body.name, image: req.body.image });
    res.redirect("campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
})

app.listen(8000, () => {
    console.log("The YelpCamp server has started");
});