var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// renders html
  res.render('index', {
    title: 'Awesome Pet Page',
    pet1: 'dog'
  });
  next();
});

router.get('/dog', function(req, res, next) {
  var num = Math.floor((Math.random()*12) + 1);
  res.render('dog', {
    dogPic: "/images/dog"+num+".gif",
    title: 'Awesome Pet Page',
    pet1: 'dog'
  });
  next();
});

module.exports = router;


//$.getJSON("https://www.reddit.com/r/Actualshowerthoughts/.json?jsonp=?", function(data) {
//  $.each(data.children.data.data.title, function(i,item){
//    $("<div/>").attr("src", item.data.url).appendTo("#dogThoughts");
//  });
//});

//dogThoughts: "https://www.reddit.com/r/Actualshowerthoughts/.json.data.children.data.data.title"



