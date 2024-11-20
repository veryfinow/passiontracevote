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
