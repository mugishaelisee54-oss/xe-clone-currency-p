function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  let rate = 1300;

  let result = amount * rate;

  let resultText = amount + " " + from + " = " + result + " " + to;

  if (document.getElementById("result")) {
    document.getElementById("result").innerText = resultText;
  }

  if (document.getElementById("rate")) {
    document.getElementById("rate").innerText = "Rate: 1 USD = 1300 RWF";
  }

  if (document.getElementById("time")) {
    document.getElementById("time").innerText = "Updated: " + new Date().toLocaleString();
  }

  saveHistory(resultText);
}

function swap() {
  let from = document.getElementById("from");
  let to = document.getElementById("to");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;
}

function saveHistory(text) {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(text);
  localStorage.setItem("history", JSON.stringify(history));
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  let container = document.getElementById("history");

  if (!container) return;

  container.innerHTML = "";

  history.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item;
    container.appendChild(p);
  });
}

function clearHistory() {
  localStorage.removeItem("history");
  loadHistory();
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

window.onload = loadHistory;function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  let rate = 1300;

  let result = amount * rate;

  let resultText = amount + " " + from + " = " + result + " " + to;

  if (document.getElementById("result")) {
    document.getElementById("result").innerText = resultText;
  }

  if (document.getElementById("rate")) {
    document.getElementById("rate").innerText = "Rate: 1 USD = 1300 RWF";
  }

  if (document.getElementById("time")) {
    document.getElementById("time").innerText = "Updated: " + new Date().toLocaleString();
  }

  saveHistory(resultText);
}

function swap() {
  let from = document.getElementById("from");
  let to = document.getElementById("to");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;
}

function saveHistory(text) {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(text);
  localStorage.setItem("history", JSON.stringify(history));
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  let container = document.getElementById("history");

  if (!container) return;

  container.innerHTML = "";

  history.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item;
    container.appendChild(p);
  });
}

function clearHistory() {
  localStorage.removeItem("history");
  loadHistory();
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

window.onload = loadHistory;