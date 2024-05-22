window.onload = function () {
  const searchParams = new URLSearchParams(window.location.search);
  const question = searchParams.get("question");
  const customMessageParam = searchParams.get("customMessage");

  if (question && customMessageParam) {
    showAnswer(question, customMessageParam);
    return;
  }
  showInitialForm();
};

let question = null;
let newUrl = null;
let customMessage = null;

document
  .getElementById("btn-generate-question")
  .addEventListener("click", (ev) => {
    question = document.getElementById("input-question").value;
    customMessage =
      document.getElementById("input-custom-message").value || customMessage;
    if (!question || question.trim() == "") {
      alert("Por favor, informe a pergunta desejada");
      return;
    }
    newUrl = `${window.location.origin}${
      window.location.pathname
    }?question=${encodeURIComponent(
      question
    )}&customMessage=${encodeURIComponent(customMessage)}`;
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
  document.getElementById("make-a-question").style.display = "flex";
  document.getElementById("about").style.display = "block";
}

function showAnswer(question, customMessage) {
  document.getElementById("the-question").textContent = `${question}?`;
  document.getElementById("answer-a-question").style.display = "block";
  document.getElementById("link-home").href = window.location.origin;

  document.getElementById("btn-yes").addEventListener("click", (ev) => {
    alert(customMessage);
  });
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
