document.getElementById("trackBtn").addEventListener("click", function () {
  const input = document.getElementById("trackingInput").value.trim().toLowerCase();

  if (input === "9877543322222111000") {
    window.location.href = "001.html";
  } else {
    alert("Oei… dat trackingnummer bestaat niet");
  }
});
