var data10;
var keys10;

var data20;
var keys20;

var data40;
var keys40;

$(function() {


  $("#season5").click(function(){
   location.href = "season5.html";
    readTextFile("Questions/10.json", function(text){
        var response = JSON.parse(text);
        console.log(response);
        localStorage.setItem("data10",JSON.stringify(response));
        localStorage.setItem("keys10",JSON.stringify(Object.keys(response)));
})
	
	 readTextFile("Questions/20.json", function(text){
        var response = JSON.parse(text);
        console.log(response);
        localStorage.setItem("data20",JSON.stringify(response));
        localStorage.setItem("keys20",JSON.stringify(Object.keys(response)));
})
	 
	  readTextFile("Questions/40.json", function(text){
        var response = JSON.parse(text);
        console.log(response);
        localStorage.setItem("data40",JSON.stringify(response));
        localStorage.setItem("keys40",JSON.stringify(Object.keys(response)));
})
 });


	$("#body").ready(function(){
		  data10 = JSON.parse(localStorage.getItem("data10"));
       keys10 = JSON.parse(localStorage.getItem("keys10"));
		  data20 = JSON.parse(localStorage.getItem("data20"));
       keys20 = JSON.parse(localStorage.getItem("keys20"));
		  data40 = JSON.parse(localStorage.getItem("data40"));
       keys40 = JSON.parse(localStorage.getItem("keys40"));
	})


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

function returnRandomQuestion(data, keys){
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


$("#10pointer").click(function(){
     
       question = returnRandomQuestion(data10, keys10);
		$("#tyrion").hide();
       $("#question").text(question["q"]);
       $("#a").text(question["a"]);
       $("#b").text(question["b"]);
       $("#c").text(question["c"]);
       $("#d").text(question["d"]);
       answer = question["s"];
       console.log(keys10.length);

       $("#10pointer,#20pointer,#40pointer").hide();
       $("#back,#a,#b,#c,#d").show();

})

$("#20pointer").click(function(){
     
       question = returnRandomQuestion(data20, keys20);
		$("#tyrion").hide();
       $("#question").text(question["q"]);
       $("#a").text(question["a"]);
       $("#b").text(question["b"]);
       $("#c").text(question["c"]);
       $("#d").text(question["d"]);
       answer = question["s"];
       console.log(keys20.length);

       $("#10pointer,#20pointer,#40pointer").hide();
       $("#back,#a,#b,#c,#d").show();

})

$("#40pointer").click(function(){
     
       question = returnRandomQuestion(data40, keys40);
		$("#tyrion").hide();
       $("#question").text(question["q"]);
       $("#a").text(question["a"]);
       $("#b").text(question["b"]);
       $("#c").text(question["c"]);
       $("#d").text(question["d"]);
       answer = question["s"];
       console.log(keys40.length);

       $("#10pointer,#20pointer,#40pointer").hide();
       $("#back,#a,#b,#c,#d").show();

})


$("#home").click(function(){
  location.href = "index.html";
})

$("#back").click(function(){
	
	 $("#question").empty();
	$("#question").append("<img id='tyrion' height='200px' src='images/Tyrion.jpg'></img>");
	$("#back,#a,#b,#c,#d").hide();
    $("#10pointer,#20pointer,#40pointer").show();
	
	$("#a").css('background','#cb4e4e');
  	$("#b").css('background','#cb4e4e');
  	$("#c").css('background','#cb4e4e');
  	$("#d").css('background','#cb4e4e');

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
