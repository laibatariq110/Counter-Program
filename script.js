// COUNTER PROGRAM

const counterLbl = document.getElementById("counterLbl");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let counter = 0;

document.getElementById("decreaseBtn").onclick = function() {
  counter--;
  document.getElementById("counterLbl").textContent = counter;
}

document.getElementById("resetBtn").onclick = function() {
  counter = 0;
  document.getElementById("counterLbl").textContent = counter;
}

document.getElementById("increaseBtn").onclick = function() {
  counter++;
  document.getElementById("counterLbl").textContent = counter;
}