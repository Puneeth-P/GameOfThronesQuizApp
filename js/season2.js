var data;
var keys;

$(function() {


  $("#season2").click(function(){
   location.href = "season2.html";
    readTextFile("Questions/2.json", function(text){
        var response = JSON.parse(text);
        console.log(response);
        localStorage.setItem("data",JSON.stringify(response));
        localStorage.setItem("keys",JSON.stringify(Object.keys(response)));
})
 });




 function readTextFile(file, callback) {
     var rawFile = new XMLHttpRequest();
     rawFile.overrideMimeType("application/json");
     rawFile.open("GET", file, true);
     rawFile.onreadystatechange = function() {
         if (rawFile.readyState === 4 && rawFile.status == "200") {
             callback(rawFile.responseText);
         }
     }
     rawFile.send(null);
 }

function returnRandomQuestion(keys){
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomQuestion = data[randomKey];
  var i = keys.indexOf(randomKey);

  if(i != -1) {
     keys.splice(i, 1);
   }
   console.log(keys)
  return randomQuestion;
}
var answer;
var bestOption;

$("#start-round2").click(function(){
       data = JSON.parse(localStorage.getItem("data"));
       keys = JSON.parse(localStorage.getItem("keys"));
       question = returnRandomQuestion(keys);
		$("#question").css("font-size","2.5em");
       $("#question").text(question["q"]);
       $("#a").text(question["a"]);
       $("#b").text(question["b"]);
       $("#c").text(question["c"]);
       $("#d").text(question["d"]);
       answer = question["s"];
       bestOption = question["50-50"];
       console.log(keys);

       $("#start-round2").hide();
       $("#next-mcq,#a,#b,#c,#d,#50-50").show();

})



$("#home").click(function(){
  location.href = "index.html";
})

$("#50-50").click(function(){
  var array = ["a","b","c","d"];
  var i = array.indexOf(answer);

  if(i != -1) {
     array.splice(i, 1);
   }

   var j = array.indexOf(bestOption);

   if(j != -1) {
      array.splice(j, 1);
    }

console.log(array);
    for(var ele in array){
      console.log(ele);
      $("#"+array[ele]).hide();
    }
})



$("#next-mcq").click(function(){
  question = returnRandomQuestion(keys);
  $("#question").text(question["q"]);
  $("#a").text(question["a"]);
  $("#b").text(question["b"]);
  $("#c").text(question["c"]);
  $("#d").text(question["d"]);
  answer = question["s"];
  bestOption = question["50-50"];
  $("#a").css('background','#cb4e4e');
  $("#b").css('background','#cb4e4e');
  $("#c").css('background','#cb4e4e');
  $("#d").css('background','#cb4e4e');

  $("#a").show();
  $("#b").show();
  $("#c").show();
  $("#d").show();
})

$("#a,#b,#c,#d").click(function(){
  console.log(answer);

  console.log($(this).attr("id"));

  if($(this).attr("id")==answer){
    $(this).css('background','green');
  }
else{

  $(this).css('background','orange');
  $("#"+answer).css('background','green');
}

})




});
