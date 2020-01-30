
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwA29WQ3eHBdYyIJ2SmqjAV2HIJa20lvg",
    authDomain: "accident-care-system-7ed1a.firebaseapp.com",
    databaseURL: "https://accident-care-system-7ed1a.firebaseio.com",
    projectId: "accident-care-system-7ed1a",
    storageBucket: "accident-care-system-7ed1a.appspot.com",
    messagingSenderId: "209447720668",
    appId: "1:209447720668:web:0e4e4f7146874d91a6c619",
    measurementId: "G-3B2NFREVR6"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  firebase.analytics();
const auth = firebase.auth();

    const db = firebase.firestore();
  	//Refernce messages collections
  	var messagesRef=firebase.database().ref('contact Formmessages');
// Listen for form submit
$('#contact Form').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
       Full Name: $('Full name').val(),
        Email: $('Email').val(),
        Subject: $('Subject').val(),
        Message: $('Message').val()
    });
 
    $('.success-message').show();
 
    $('#Contact Form')[0].reset();
});

