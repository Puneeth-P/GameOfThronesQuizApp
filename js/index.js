
var keys;

var data = {
  "1": "Which is the world's smallest country?",
  "2": "How many dots are present on a six-numbered dice?",
  "3": "What colour you get when you combine blue and yellow?",
  "4": "What is the capital of Gujurat?",
  "5": "What is the latest Java version?",
  "6": "Which is the smallest ocean in the world?",
  "7": "How many consonants are there in English alphabets?",
  "8": "What is the second color of the rainbow?",
  "9": "Which is the sixth planet in the solor system?",
  "10": "How many union territories are there in India currently?",
  "11": "How many sides are same in the scalene triangle?",
  "12": "What is the total number of bones in human body?",
  "13": "Who gave us the universal law of gravitation?",
  "14": "Who is the first captain of Royal Challengers Bangalore team?",
  "15": "How many rings are there in Olympic symbol?",
  "16": "Expand IPO"
}

$(function() {


  $("#season1").click(function(){
   location.href = "season1.html";
//     readTextFile("Questions/1.json", function(text){
//         var response = JSON.parse(text);
//         console.log(response);
//         localStorage.setItem("data",JSON.stringify(response));
//         localStorage.setItem("keys",JSON.stringify(Object.keys(response)));
// })
// $.getJSON("Questions/1.json", function(json) {
//   console.log("response:"+json);
//   localStorage.setItem("data",JSON.stringify(json));
//   localStorage.setItem("keys",JSON.stringify(Object.keys(json)));
// });
 });




 // function readTextFile(file, callback) {
 //     var rawFile = new XMLHttpRequest();
 //     rawFile.overrideMimeType("application/json");
 //     rawFile.open("GET", file, true);
 //     rawFile.onreadystatechange = function() {
 //         if (rawFile.readyState === 4 && rawFile.status == "200") {
 //             callback(rawFile.responseText);
 //         }
 //     }
 //     rawFile.send(null);
 // }

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
       keys = Object.keys(data);
       question = returnRandomQuestion(keys);
       $("#question").text(question);


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
