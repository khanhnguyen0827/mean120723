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
    var myHoney = "Bill^^^"
    res.render("home",{
        hoten:myHoney,
        number1:10,
        number2:5,
    });
})


app.get('/random', (req, res) => {
    var imgs = ["1.jpg","2.jpg","3.jpg",]
    var img = imgs[Math.floor(Math.random() * imgs.length)]
    res.render('home2',{
        img:img,
        imgs:imgs
    });
})

var bo = [];
for( var i=0; i<52;i++){
    bo.push(i+1);
}

// 52 lá bài 
app.get('/bai', (req, res) => {
   

    
    res.render('home3',{
        bo:bo,
       
    });
})

// xào bài
app.get("/shuffle", function(req, res){
    
    shuffle(bo)
    
    res.render('home3',{
        bo:bo,
       
    });
});

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
