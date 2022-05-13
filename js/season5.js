var all = {
	"cri": {
		"1": "Against which IPL team did Chris Gayle smashed 175 runs?",
		"2": "Which country is hosting the 2023 ODI world cup?",
		"3": "Expand DRS"
	},

	"mat": {
		"1": "One card is drawn from a deck of 52 cards. What is the probability that the card will be an ace?",
		"2": "What is seven-sided polygon known as?",
		"3": "What is HCF of 8 and 16?"
	},

	"fri": {
		"1": "Aside from the six main characters, which character appears the most on Friends?",
		"2": "How many sisters does Joey have?",
		"3": "How many categories of towels does Monica have?"
	},
	"ca": {
		"1": "Which bank acquired the Indian consumer banking business of CitiBank?",
		"2": "In which country did the world's largest electric cruise ship make its maiden voyage?",
		"3": "How many seats did Congress party win in the recently concluded Uttar Pradesh election?"
	},
	"geo": {
		"1": "Which is the largest island in the world?",
		"2": "Which is the capital of USA?",
		"3": "Which is the 2nd largest country in the world by area?"
	},
	"exp": {
		"1": "Who is the President of Expedia Marketplace?",
		"2": "Which rail company did Expedia acquire few years back? ",
		"3": "In which year did Expedia go public?"
	},
	"tec": {
		"1": "Which company acquired GitHub?",
		"2": "Expand PDF",
		"3": "Which company is the second largest cloud services provider?"
	},
	"spo": {
		"1": "Who has won the most grand slams in tennis?",
		"2": "Who was the runner-up of 2018 football world cup?",
		"3": "Which country has the most Olympic gold medals in 2021?"
	},

	"ind": {
		"1": "Which is the longest river in India?",
		"2": "What is the capital of Andhra Pradesh?",
		"3": "Who is the current defence minister of India?"
	},
	"bol": {
		"1": "Who is the director of movie 'Lakshya'?",
		"2": "In the movie Zindagi Na Milega Dobara, the guys sing a jingle about the biscuit, what were the biscuits called?",
		"3": "In the movie 3 idiots, what was the nick name given to Chatur by his friends?"
	},
	"mar": {
		"1": "How many Infinity Stones are there?",
		"2": "Nick Fury wears an eye patch over which eye? ",
		"3": "From what metal is Captain America's shield and Bucky's arm are made of?"
	},
	"ani": {
		"1": "Which is the smallest bird in the world?",
		"2": "How many legs does a cockroach have?",
		"3": "Which is the most smartest animal in the world?"
	},
	"pol": {
		"1": "Who is the first party president of BJP?",
		"2": "Whats is the minimum age to qualify for election to the Lok Sabha?",
		"3": "Who is the chairman of Rajya Sabha? (President/Vice-President/Prime Minister?)"
	},
	"myt": {
		"1": "Name any son of Rama",
		"2": "Which arrow did Arjuna used to kill Karna?",
		"3": "How many days did Kurukshetra War last?"
	},
	"ads": {
		"1": "Which drink had the tagline 'Yeh Dil Maange More'?",
		"2": "Which dog breed was used in famous vodafone ad?",
		"3": "In which ad did Rahul Dravid become 'Indiranagar ka Gunda?'"
	},
  "phy": {
		"1": "What type of lens used in magnifying glass? (Concave/Convex)",
		"2": "What is the SI unit of mass?",
		"3": "If you are travelling at 50 km/hr and reach your destination in 2 hours, what is distance covered?"
	},
  "che": {
    "1": "What is the charge on electron? (Positive/Negative)",
    "2": "What is the second element in periodic table?",
    "3": "What is the chemical formula for Carbon Monoxide?"
  }
}
var data;
var keys;

$(function() {



$("#season5").click(function(){
  location.href = "season5.html";
   });

function returnRandomQuestionForFive(keys){
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomQuestion = data[randomKey];
  var i = keys.indexOf(randomKey);

  if(i != -1) {
     keys.splice(i, 1);
   }
   console.log(keys)
  return randomQuestion;
}


function hideAll() {
   $("#cri").hide();
    $("#mat").hide();
      $("#phy").hide();
        $("#che").hide();
      $("#fri").hide();
      $("#ca").hide();
        $("#geo").hide();
          $("#exp").hide();
            $("#tec").hide();
              $("#spo").hide();
                $("#ind").hide();
                $("#bol").hide();
                  $("#mar").hide();
                    $("#ani").hide();
                    $("#pol").hide();
                      $("#myt").hide();
                        $("#ads").hide();
}

function showAll() {
   $("#cri").show();
    $("#mat").show();
    $("#phy").show();
      $("#che").show();
      $("#fri").show();
      $("#ca").show();
        $("#geo").show();
          $("#exp").show();
          $("#tec").show();
            $("#spo").show();
              $("#ind").show();
              $("#bol").show();
                $("#mar").show();
                  $("#ani").show();
                  $("#pol").show();
                    $("#myt").show();
                      $("#ads").show();
}

$("#cri").click(function(){
       var obj = all["cri"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#mat").click(function(){

       var obj = all["mat"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#phy").click(function(){

       var obj = all["phy"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#che").click(function(){

       var obj = all["che"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#fri").click(function(){

       var obj = all["fri"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#ca").click(function(){

       var obj = all["ca"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#geo").click(function(){

       var obj = all["geo"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#exp").click(function(){

       var obj = all["exp"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#tec").click(function(){

       var obj = all["tec"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#spo").click(function(){

       var obj = all["spo"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#ind").click(function(){

       var obj = all["ind"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#bol").click(function(){

       var obj = all["bol"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#mar").click(function(){

       var obj = all["mar"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#ani").click(function(){

       var obj = all["ani"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})
$("#pol").click(function(){

       var obj = all["pol"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})
$("#myt").click(function(){

       var obj = all["myt"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})
$("#ads").click(function(){

       var obj = all["ads"]

       data = obj;
       keys = Object.keys(obj);

       question = returnRandomQuestionForFive(keys);
        $("#question").text(question);
      hideAll();
       $("#next-ques").show();
       $(this).css('text-decoration','line-through');
       $(this).css('background-color','#e37171');

})

$("#next-ques").click(function(){
  question = returnRandomQuestionForFive(keys);
  $("#question").text(question);
  if(keys.length==0) {
     $("#next-ques").hide();
      $("#top").show();
  }
})

$("#top").click(function(){
  $("#question").text("Choose one of the topics!!");
  showAll();
  $("#top").hide();

})

$("#home").click(function(){
  location.href = "index.html";
})



});
