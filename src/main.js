
var firebaseConfig = {
    apiKey: "AIzaSyC136phJtySm9qTQxty9GKe1wsnxur0V2g",
    authDomain: "bfcontracting-68104.firebaseapp.com",
    projectId: "bfcontracting-68104",
    storageBucket: "bfcontracting-68104.appspot.com",
    messagingSenderId: "304714458624",
    appId: "1:304714458624:web:a181e94865601aafa5dae5",
    measurementId: "G-1TS9V715FQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  //reference messegaes collection
  var messagesRef = firebase.database().ref('messages');
document.getElementById("contactForm").addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();

    var name= getInputVal('name');
    var company= getInputVal('company');
    var email= getInputVal('email');
    var phone= getInputVal('phone');
    var message= getInputVal('message');


    saveMessage(name, company, email, phone, message);
}


function getInputVal(id){
    return document.getElementById(id).value;
}

//save to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message

    })
}