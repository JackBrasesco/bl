var firebaseConfig = {
  apiKey: "AIzaSyB4n3T-wB2G2UnIrMUU3hC7SqoXhPEb4L0",
  authDomain: "classadoo-dev.firebaseapp.com",
  databaseURL: "https://classadoo-dev.firebaseio.com"	
};


firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge")

function addMessage() {
  console.log("Adding message");
  store.child("messages").push({message: "<html>
                                <head>
                                <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
                                <link rel="stylesheet" href="bob.css"/>
                                </head>
                                <body>
                                <h1 id="test1">
                                Fun with Bot Bob!
                                </h1>
                                <!--    <img src="https://pp.vk.me/c9999/u127021015/-1/x_485fb4fe.jpg" id="blah">-->
                                <div class = "page" id="output-wrapper">
                                <div id="outputbox">
                                <div id="game-output">
                                </div>
                                </div> 
                                <input id="game-input" type="text" /> 
                                </div>
                                <div class = "page"id="bob">      
                                </div>
                                <h6>
                                Update 2.1: Use "/calculate 2+2" (or any other numbers) however only addition works
                                -------------------------------------Update 2.1.1: All operations work use /calculate and then: 3x8 for multiplication x/x for division and x-x for subtraction!
                                </h6>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Iy2MO4L1mM8?autoplay=1&cc_load_policy=1" frameborder="0" allowfullscreen id="superstar"></iframe>
                                <script src="bob.js">
                                </script>
                                </body>
                                </html>var gameInput = $("#game-input");
                                var gameOutput  = $("#game-output");
                                gameInput.keydown(function(keydownEvent) {
                                // the key code for enter is 13
                                console.log(gameOutput)
                                if (keydownEvent.keyCode == 13) {  
                                parseText(gameInput.val()); 
                                gameInput.val();
                                var str = gameInput.val().toLowerCase();
                                var isColor = str.indexOf("color");
                                var isName = str.indexOf("name");
                                var isFuck = str.indexOf("fuck");
                                var isHi = str.indexOf("hi");
                                var isAge = str.indexOf("old");
                                var isGood = str.indexOf("good");
                                var isHow = str.indexOf("how are");
                                var isBye = str.indexOf("bye");
                                var CalculateFunction = str.indexOf("/calculate")
                                if (CalculateFunction > -1) {
                                var nS = str.split("/calculate")[1];
                                var isAdd = nS.indexOf("+");
                                var isTimes = nS.indexOf("x");
                                var isMinus = nS.indexOf("-");
                                var isDivide =nS.indexOf("/");
                                if (isTimes > -1) {
                                var timesSplit = nS.split("x");
                                var oneNumber = parseFloat(timesSplit[0]);
                                var twoNumber = parseFloat(timesSplit[1]);
                                var multiply = (oneNumber * twoNumber);        
                                console.log(multiply);
                                var multiplyFinal = String(multiply);        
                                gameOutput.html(multiplyFinal)
                               }
                               if (isMinus > -1) {        
    var minusSplit = nS.split("-");
    var fNumber = parseInt(minusSplit[0]);
    var sNumber = parseInt(minusSplit[1]);
    var subtract = (fNumber - sNumber);
    var subtractFinal = String(subtract);
    console.log("3")
    gameOutput.html(subtractFinal)
  }
  if (isAdd > -1) {         
    var plusSplit = nS.split("+");
    var firstNumber = parseFloat(plusSplit[0]);
    var secondNumber = parseFloat(plusSplit[1]);
    var add = (firstNumber + secondNumber);
    var addFinal = String(add);
    console.log("3")
    gameOutput.html(addFinal)
  }
  if (isDivide > -1) {         
    var divideSplit = nS.split("/");
    var firstoneNumber = parseFloat(divideSplit[0]);
    var secondtwoNumber = parseFloat(divideSplit[1]);
    var divide = (firstoneNumber / secondtwoNumber);
    var divideFinal = String(divide);
    console.log("3")
    gameOutput.html(divideFinal)
  }
}
if (isBye > -1) {
  gameOutput.html("adios!")
}
if (isHow > -1) {
  gameOutput.html("IM NOT GOOD")
}
if (isGood > -1) {
  gameOutput.html("That's nice... I'm good too")
}
if (isAge > -1) {
  gameOutput.html("I am 13490124930492 years old")
}
if (isHi > -1) {
  counter()
  if (inc < 3)
    gameOutput.html("Hi, how are you")
    else gameOutput.html("ur mum said hi last night!!!!!") 
      }
if (isColor > -1) {
  gameOutput.html("My favorite color is blue")
}
else if (isName > -1) {
  var response
  =responses[Math.floor(Math.random()*responses.length)];
  gameOutput.html(response)
}
else if (isFuck > -1) {
  gameOutput.html("When and where?")
}
else {}
console.log(isFuck)
gameInput.val("")
}  
})



function parseText(text) {  
  if (text === "hello") {
    gameOutput.html("Hi there!");
  }else if(find > 0) {
    gameOutput.html("blue");
  } else if(text === "How much do you weigh") {
    gameOutput.html("3 pounds");
  } else if(text === "help") {
    gameOutput.html("I'm not 'bob the help bot'... help thyself");
  } else if(text === "Hi") { 
    counter()
    if (inc < 3)
      gameOutput.html("Hi, how are you")
      else gameOutput.html("ur mum said hi last night!!!!!") 
        } else if(text === "What's your favorite class?") {
          gameOutput.html("Anything but programming!");
        } else if(text === "what is your name") {
          var response
          =responses[Math.floor(Math.random()*responses.length)];
          gameOutput.html(response);      
        } 

  else {gameOutput.html("That doesnt make any sense  idiot, type 'help' for a list of things that do make sense");
       }
}

var responses = ["Bot Bob!", "Bob", "My name is Bob","my name is henry vaugn bransten duex mobile chow meinington of wells, but you can call me Bob!","Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky, just kidding... its bob","Just ask ur mum!!!"]

var inc = 0
function counter() {
  inc = inc + 1;
} 



h1 {
  border: 5px solid darkslategray;
  background-color: lightslategray;
  border-radius: 100px;
  text-align: center;
  /*  margin-top: 50px;*/
  margin-left: 25px;
  margin-right: 25px;
  display: block;
}

body {
  background-color: burlywood
}

#output-wrapper {
background-color: lightslategray;
border: 5px solid darkslategray;
height: 45%;
width: 300px;
text-align: center;
color: cornsilk;
line-height:inherit;
}
#game-input {
left:175;
position: absolute;
bottom: 10px;

}

#outputbox {
border: 2px solid darkslategray;
background-color: slategray;
border-radius: 50px;
width: 350px;
text-align: center;
height: 150px;
top:50px;
left: 75px;
size: 15px;
position: relative;
}

#output-wrapper {
width: 500;
position: relative;
}

#bob {
background-image: url("http://toonclips.com/600/cartoon-greedy-rich-business-man-holding-his-money-by-ron-leishman-3555.jpg");
height: 300px;
width: 300px;
margin-left: 20px;
margin-top: 30px;
background-size: cover;
}
h6 {
}

#game-output {
width: 200;
z-index:1;
color: black;
position: relative;
left: 50px;
}

#superstar {
display: none;
}

  .page {
    display:inline-block;
  }

#blah {
height:200px;
width: 200px;
z-index: -1;
}
"})	
}

function readMessages(callback) {
  console.log("binding");
  store.child("messages").on("child_added", function(child) {
    var video = $("#blah");
    var data = child.val()
    var message = data.message.style.color = "red"		
    callback(message);
  })
}

function clearMessages() {
  console.log("clearing")
  store.child("messages").remove();
}

function listenForClear(onClear) {
  store.child("messages").on("value", function(data) {
    var messages = data.val()

    if (!messages) {
      onClear()
    }
  })
}