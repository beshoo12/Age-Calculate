"use strict";

function calculateAge() {
  var birthDateInput = document.getElementById("birthdate").value;

  if (!birthDateInput) {
    document.getElementById("result").innerText = "Please enter your birth date.";
    return;
  }

  var birthDate = new Date(birthDateInput);
  var now = new Date();
  var diffMs = now - birthDate;
  var years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
  var days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  var hours = Math.floor(diffMs / (1000 * 60 * 60));
  var minutes = Math.floor(diffMs / (1000 * 60));
  document.getElementById("result").innerHTML = "Now You are:<br>\n      <strong>".concat(years, "</strong> years old<br>\n      <strong>").concat(days, "</strong> days<br>\n      <strong>").concat(hours, "</strong> hours<br>\n      <strong>").concat(minutes, "</strong> minutes");
}