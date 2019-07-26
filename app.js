var express = require("express");
var app = express();

// replaces the functionality of body parser
app.use(express.urlencoded({extended: true}));

// set templates to EJS
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image:"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"}, 
        {name: "Yosemite", image:"https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_1280.jpg"}, 
        {name: "Fallen Leaf Lake", image:"https://cdn.pixabay.com/photo/2017/08/04/20/04/camping-2581242_1280.jpg"}, 
        {name: "Salmon Creek", image:"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"}, 
        {name: "Yosemite", image:"https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_1280.jpg"}, 
        {name: "Fallen Leaf Lake", image:"https://cdn.pixabay.com/photo/2017/08/04/20/04/camping-2581242_1280.jpg"}, 
        {name: "Salmon Creek", image:"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"}, 
        {name: "Yosemite", image:"https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_1280.jpg"}, 
        {name: "Fallen Leaf Lake", image:"https://cdn.pixabay.com/photo/2017/08/04/20/04/camping-2581242_1280.jpg"}, 
        {name: "Salmon Creek", image:"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"}, 
        {name: "Yosemite", image:"https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_1280.jpg"}, 
        {name: "Fallen Leaf Lake", image:"https://cdn.pixabay.com/photo/2017/08/04/20/04/camping-2581242_1280.jpg"}, 
 
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