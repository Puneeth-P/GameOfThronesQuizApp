var data;
var keys;

$(function() {


  $("#season3").click(function(){
    location.href = "season3.html";
  });


var easy = [{"2":"Who is this?"}, {"3":"Who is this?"}, {"10":"What does this pin signify?"}, {"11":"Who is this?"}, {"12":"What disease is this?"}]
var diff = [{"1":"Which castle is this?"}, {"4":"What is this place called?"}, {"5":"Which city entrance is this?"}, {"6":"Who will kill this champion?"},{"7":"What word is chanted in this scene?"}, {"8":"What is this spot called?"}, {"9":"Where is this?"}  ]


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

  if(easy.length > 0){
    num = Math.floor(Math.random() * (easy.length));
    obj = easy[num];
    if(num != -1) {
         easy.splice(num, 1);
       }
  }
  else{
  num = Math.floor(Math.random() * (diff.length));
  obj = diff[num];
  if(num != -1) {
       diff.splice(num, 1);
     }
  }

  console.log(obj);
  var key = Object.keys(obj);
  var img = key[0];
  var question = obj[img];
   $("#question").text(question);

  $("#ques-img").attr("src","Questions/3/"+img+".png");
})






});
