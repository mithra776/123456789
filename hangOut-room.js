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

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
         purporse : "adding room"
     });
     localStorage.setItem("room_name" , room_name);

     window.location = "hangOut_page.html";
    }

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
        console.log("Room names =" + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' > " + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
       //End code
       });});
    }
    
getData();

    function redirectToRoomName(name)
    {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "hangOut_page.html";
    }

  function logOut()
  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }