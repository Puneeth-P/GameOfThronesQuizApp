var data;
var keys;

$(function() {


  $("#season1").click(function(){
   location.href = "season1.html";
    readTextFile("Questions/1.json", function(text){
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

$("#start-round").click(function(){
       data = JSON.parse(localStorage.getItem("data"));
       keys = JSON.parse(localStorage.getItem("keys"));
       question = returnRandomQuestion(keys);
       $("#question").text(question);
		$("#question").css("font-size","3em");

       $("#start-round").hide();
       $("#next-ques").show();

})

$("#next-ques").click(function(){
  question = returnRandomQuestion(keys);
  $("#question").text(question);
})

$("#home").click(function(){
  location.href = "index.html";
})



});
