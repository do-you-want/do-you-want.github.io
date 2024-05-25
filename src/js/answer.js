let question = null;

window.onload = function () {
  const searchParams = new URLSearchParams(window.location.search);
  document.getElementById("link-home").href = window.location.origin;
  question = searchParams.get("question");
  if (question) {
    showAnswer(question);
    return;
  }
};

document.getElementById("btn-no").addEventListener("mouseover", (ev) => {
  randomizeButtonPosition();
});

document.getElementById("btn-no-random").addEventListener("mouseover", (ev) => {
  randomizeButtonPosition();
});

function randomizeButtonPosition() {
  const button = document.getElementById("btn-no");
  button.style.display = "none";
  const top = getTopPosition();
  const left = getLeftPosition();
  const btnRandom = document.getElementById("btn-no-random");
  btnRandom.style.display = "inline-block";
  btnRandom.style.position = "absolute";
  btnRandom.style.top = top + "px";
  btnRandom.style.left = left + "px";
}

function showAnswer(question) {
  document.getElementById("the-question").textContent = `${question}?`;
  document.getElementById("answer-a-question").style.display = "block";
}

document.getElementById("btn-yes").addEventListener("click", (ev) => {
  alert("Promessa é dívida, emmm?!?!");
});

document.getElementById("btn-no").addEventListener("click", (ev) => {
  randomizeButtonPosition();
});

document.getElementById("btn-no-random").addEventListener("click", (ev) => {
  randomizeButtonPosition();
});

function getLeftPosition() {
  const spaceWidth = window.innerWidth;
  const left = Math.round(Math.random() * (spaceWidth - 100));
  if (left < 50) {
    return getLeftPosition();
  }
  return left;
}

function getTopPosition() {
  const spaceHeight = window.innerHeight;
  const top = Math.round(Math.random() * (spaceHeight - 350));
  if (top < 50) {
    return getTopPosition();
  }
  return top;
}
