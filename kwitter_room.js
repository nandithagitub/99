
//ADD YOUR FIREBASE LINKS HERE
'use strict';
var firebaseConfig = {
      apiKey: "AIzaSyB0C_7TDZrelkMD4iSps5jk8T7lOGrAlzU",
      authDomain: "kwitter-aa8bb.firebaseapp.com",
      databaseURL: "https://kwitter-aa8bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-aa8bb",
      storageBucket: "kwitter-aa8bb.appspot.com",
      messagingSenderId: "638903700177",
      appId: "1:638903700177:web:1588cc32008205eb8313f0",
      measurementId: "G-YNZ81715ZK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("name").innerHTML = "Welcome"+user_name+"😊";
function addRoom() {
      var room_name = document.getElementById('roomname').value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding Room name"
      });
      localStorage.setItem("roomname", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name" + "-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}


