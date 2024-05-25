let question = null;
let newUrl = null;

document
  .getElementById("btn-generate-question")
  .addEventListener("click", (ev) => {
    question = document.getElementById("input-question").value;
    if (!question || question.trim() == "") {
      alert("Por favor, informe a pergunta desejada");
      return;
    }
    newUrl = `${window.location.href}answer.html?question=${encodeURIComponent(
      question
    )}`;
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
