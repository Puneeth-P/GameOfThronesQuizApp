var data;
var keys;

$(function() {


  $("#season3").click(function(){
    location.href = "season3.html";
  });


var easy = [
  {"1":"Which logo is correct?"},
  {"2":"Which company's logo is this?"},
  {"3":"Who is this cricketer?"},
  {"4":"Name this bird"},
  {"5":"Name this monument"},
  {"6":"Name this state"},
  {"7":"Which app is this?"},
  {"8":"Identify this model"},
  {"9":"This portrait is shown in which movie?"},
  {"10":"Identify this city"},
  {"11":"Identify this greek alphabet"},
  {"12":"What is this table called?"},
  {"13":"Which DB symbol is this?"},
  {"14":"Which logo is correct?"},
  {"15":"Which game is this?"},
  {"16":"Name this car brand"}
]

var answer;
var bestOption;

$("#start-round3").click(function(){

  var num = Math.floor(Math.random() * (easy.length));

  var obj = easy[num];

    if(num != -1) {
      easy.splice(num, 1);
     }


      console.log(obj);
      var key = Object.keys(obj);
      var img = key[0];
      var question = obj[img];
       $("#question").text(question);

      $("#ques-img").attr("src","Questions/3/"+img+".png");

       $("#start-round3").hide();
       $("#next-img").show();

})



$("#home").click(function(){
  location.href = "index.html";
})





$("#next-img").click(function(){

  var num;
  var obj;


    num = Math.floor(Math.random() * (easy.length));
    obj = easy[num];
    if(num != -1) {
         easy.splice(num, 1);
       }


  console.log(obj);
  var key = Object.keys(obj);
  var img = key[0];
  var question = obj[img];
   $("#question").text(question);

  $("#ques-img").attr("src","Questions/3/"+img+".png");
})






});
