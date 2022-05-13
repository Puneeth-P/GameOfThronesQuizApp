var data = {
  "1" : {
    "q" : "Which of the following countries don't have income tax?",
    "a" : "Yemen",
    "b" : "Saudi Arabia",
    "c" : "Monaco",
    "d" : "Jordan",
    "s" : "c",
    "50-50" : "b"
  },
  "2" : {
    "q" : "Which is the largest state in India by area?",
    "a" : "Rajasthan",
    "b" : "Uttar Pradesh",
    "c" : "Madhya Pradesh",
    "d" : "Maharashtra",
    "s" : "a",
    "50-50" : "c"
  },
  "3" : {
    "q" : "In which year did World War II end?",
    "a" : "1944",
    "b" : "1945",
    "c" : "1946",
    "d" : "1948",
    "s" : "b",
    "50-50" : "c"
  },
  "4" : {
    "q" : "Which of these states has longest coastline?",
    "a" : "Tamil Nadu",
    "b" : "Gujurat",
    "c" : "Maharashtra",
    "d" : "Orissa",
    "s" : "b",
    "50-50" : "c"
  },
  "5" : {
    "q" : "What is the color of letter 'L' in Google logo?",
    "a" : "Blue",
    "b" : "Yellow",
    "c" : "Red",
    "d" : "Green",
    "s" : "d",
    "50-50" : "c"
  },
  "6" : {
    "q" : "Which is the largest private sector bank in India?",
    "a" : "HDFC Bank",
    "b" : "Axis Bank",
    "c" : "Kotak Bank",
    "d" : "ICICI Bank",
    "s" : "a",
    "50-50" : "d"
  },
  "7" : {
    "q" : "Where is the headquarters of WHO situated?",
    "a" : "New York",
    "b" : "Geneva",
    "c" : "Paris",
    "d" : "London",
    "s" : "b",
    "50-50" : "a"
  },
  "8" : {
    "q" : "Where is the central office of RBI situated?",
    "a" : "Kolkata",
    "b" : "Bangalore",
    "c" : "Mumbai",
    "d" : "New Delhi",
    "s" : "c",
    "50-50" : "d"
  },
  "9" : {
    "q" : "Which of these countries has the highest neighbours?",
    "a" : "China",
    "b" : "Germany",
    "c" : "Austria",
    "d" : "Brazil",
    "s" : "a",
    "50-50" : "b"
  },
  "10" : {
    "q" : "How many fundamental rights are given by the Indian Constitution?",
    "a" : "4",
    "b" : "5",
    "c" : "6",
    "d" : "8",
    "s" : "c",
    "50-50" : "b"
  },
  "11" : {
    "q" : "Which is the 3rd most populated country?",
    "a" : "Brazil",
    "b" : "Indonesia",
    "c" : "USA",
    "d" : "Russia",
    "s" : "c",
    "50-50" : "b"
  },
  "12" : {
    "q" : "Which continent has the most countries?",
    "a" : "Asia",
    "b" : "Africa",
    "c" : "Europe",
    "d" : "North America",
    "s" : "b",
    "50-50" : "a"
  },
  "13" : {
    "q" : "Which metal is found in the core of the earth?",
    "a" : "Aluminium",
    "b" : "Iron",
    "c" : "Silicon",
    "d" : "Nickel",
    "s" : "b",
    "50-50" : "a"
  },

  "14" : {
    "q" : "The frequency of which of the following is the highest?",
    "a" : "Micro waves",
    "b" : "Radio waves",
    "c" : "Gamma waves",
    "d" : "Light waves",
    "s" : "c",
    "50-50" : "a"
  },

  "15" : {
    "q" : "Who is the first Indian to receive the Nobel Prize?",
    "a" : "C V Raman",
    "b" : "Amartya Sen",
    "c" : "Rabindranath Tagore",
    "d" : "Mother Theresa",
    "s" : "c",
    "50-50" : "a"
  },

  "16" : {
    "q" : "How many districts are there in Karnataka?",
    "a" : "30",
    "b" : "31",
    "c" : "32",
    "d" : "33",
    "s" : "b",
    "50-50" : "c"
  }
}

var keys;

$(function() {


  $("#season2").click(function(){
   location.href = "season2.html";
 //    readTextFile("Questions/2.json", function(text){
 //         var response = JSON.parse(text);
 //         console.log(response);
 //         localStorage.setItem("data",JSON.stringify(response));
 //         localStorage.setItem("keys",JSON.stringify(Object.keys(response)));
 // })
 });


 //
 //
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
var answer;
var bestOption;

$("#start-round2").click(function(){
        keys = Object.keys(data);
       question = returnRandomQuestion(keys);

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
