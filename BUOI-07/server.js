var express = require('express');
var app = express();

//khai báo thư viện view ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//khai báo middle ware thư mục public cho tất cả use truy cập
app.use(express.static("public"))


//server chon port 3000
app.listen(3000);


//body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render("master",{page:'home'});
})

app.get('/register', (req, res) => {
    res.render("master",{page:'register'});
})


var arrProducts= [
    {name:"iPhone 12 Pro", price:1600000, img:"1.png"},
    {name:"iPhone 13 Pro", price:1000000, img:"1.png"},
    {name:"iPhone 14 Pro", price:9000000, img:"1.png"},
    {name:"iPhone 12 Pro", price:1600000, img:"1.png"},
    {name:"iPhone 12 Pro", price:1600000, img:"1.png"},

]
app.get('/products', (req, res) => {
    res.render("master",{page:'products', arr: arrProducts});
  })


app.get('/sp', (req, res) => {
    var i = parseInt(req.query.ip) ;
    var sp = arrProducts[i];
    res.render("master",{page:'product-detail', sp:sp});
})
