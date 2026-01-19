document.getElementById("track-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("trackingNumber").value.trim().toUpperCase();
  if (input === "TRK123456789US") {
    window.location.href = "result.html";
  } else {
    document.getElementById("error").textContent = "Tracking number not found. Try TRK123456789US.";
  }
});