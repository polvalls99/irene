function enterSite() {
  document.getElementById("content").style.display = "block";
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
}

function openLetter(letter) {
  if (letter === 'letter1') {
    alert("Encara que estiguis trista, recorda que sempre estic amb tu 💛");
  }
  if (letter === 'letter2') {
    alert("Si em trobes a faltar, pensa que jo ja t’estic trobant a faltar.");
  }
}
