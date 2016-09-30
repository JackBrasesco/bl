var firebaseConfig = {
  apiKey: "AIzaSyB4n3T-wB2G2UnIrMUU3hC7SqoXhPEb4L0",
  authDomain: "classadoo-dev.firebaseapp.com",
  databaseURL: "https://classadoo-dev.firebaseio.com"	
};

var input = $("#blah")

input.keydown(function(keydownevent) {
  if (keydownevent.keycode == 13)
firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge")

function addMessage() {
  console.log("Adding message");
  store.child("messages").push({message: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vfc42Pb5RA8?&autoplay = 1" frameborder="0" allowfullscreen></iframe>'})	
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