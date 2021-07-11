var firebaseConfig = {
  apiKey: "AIzaSyAW7HIML37V73G0O87y_g4SkbG49PLVFyw",
  authDomain: "hangout-ba5a8.firebaseapp.com",
  databaseURL: "https://hangout-ba5a8-default-rtdb.firebaseio.com",
  projectId: "hangout-ba5a8",
  storageBucket: "hangout-ba5a8.appspot.com",
  messagingSenderId: "1006775892981",
  appId: "1:1006775892981:web:208479f75a20825c92bebc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function sent()
{
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value ="";
}