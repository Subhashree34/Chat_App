var firebaseConfig = {
  apiKey: "AIzaSyC26itmZheC1uBPKLTVQemDaC898eNBwFg",
  authDomain: "chat-bd2db.firebaseapp.com",
  databaseURL: "https://chat-bd2db-default-rtdb.firebaseio.com",
  projectId: "chat-bd2db",
  storageBucket: "chat-bd2db.appspot.com",
  messagingSenderId: "805674876984",
  appId: "1:805674876984:web:5ffccf7f59f1a6af74e6cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose: "adding user",
      age: 12,
      username: user_name,
      Websiteusing: "Kwitter"
  });
}