window.onload = function () {
  const searchParams = new URLSearchParams(window.location.search);
  const question = searchParams.get("question");

  if (question) {
    showAnswer(question);
    return;
  }
  showInitialForm();
};

let question = null;
let newUrl = null;

document
  .getElementById("btn-generate-question")
  .addEventListener("click", (ev) => {
    question = document.getElementById("input-question").value;
    if (!question || question == "") {
      alert("Por favor, informe a pergunta desejada");
      return;
    }
    newUrl = `${window.location.href}?question=${encodeURIComponent(question)}`;
    showLink();
  });

document.getElementById("btn-copy-link").addEventListener("click", (ev) => {
  navigator.clipboard.writeText(newUrl);
  alert(`Link copiado: ${newUrl}`);
});

function showLink() {
  document.getElementById("container-link").style.display = "block";
  document.getElementById("link").href = newUrl;
  document.getElementById("link").textContent = newUrl;
}

function showInitialForm() {
  document.getElementById("make-a-question").style.display = "table";
  document.getElementById("about").style.display = "table";
}

function showAnswer(question) {
  document.getElementById("the-question").textContent = `${question}?`;
  document.getElementById("answer-a-question").style.display = "table";
  document.getElementById("link-home").href = window.location.origin;
}

document.getElementById("btn-no").addEventListener("mouseover", (ev) => {
  randomizeButtonPosition();
});

document.getElementById("btn-no-random").addEventListener("mouseover", (ev) => {
  randomizeButtonPosition();
});

function randomizeButtonPosition() {
  const button = document.getElementById("btn-no");
  button.style.display = "none";
  let spaceWidth = window.innerHeight;
  let spaceHeight = window.innerWidth;
  spaceWidth = spaceWidth - 50;
  spaceHeight = spaceHeight - 200;

  let top = Math.round(Math.random() * (spaceWidth - 200)) + "px";
  let left = Math.round(Math.random() * (spaceHeight - 200)) + "px";
  const btnRandom = document.getElementById("btn-no-random");
  btnRandom.style.display = "inline-block";
  btnRandom.style.position = "absolute";
  btnRandom.style.top = top;
  btnRandom.style.left = left;
}

document.getElementById("btn-yes").addEventListener("click", (ev) => {
  alert("Promessa é dívida, emmm?!?!");
});
