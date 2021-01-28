// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApboCxnePZvXCu-u3qCMqnnheM9CA5b4k",
    authDomain: "watertreatmentpolibatam.firebaseapp.com",
    databaseURL: "https://watertreatmentpolibatam-default-rtdb.firebaseio.com",
    projectId: "watertreatmentpolibatam",
    storageBucket: "watertreatmentpolibatam.appspot.com",
    messagingSenderId: "999926337724",
    appId: "1:999926337724:web:bfa2f81b86be61fffac0b9",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  var flowRef = database.ref().on("value", handleSuccess, handleError);
  
  function handleSuccess(items) {
    console.log(items.val());
    const getflow = items.val().override.flowmeter
    const getph = items.val().override.ph
    const gettds = items.val().override.tds
  
    document.getElementById("getflow").innerHTML = getflow
    document.getElementById('getph').innerHTML = getph
    document.getElementById('gettds').innerHTML = gettds
  }
  function handleError(error) {
    console.log(error);
  }
  
  function backWash() {
    firebase.database().ref("backwash").set({
      backwash: true,
    });
  }
  