function enter() {
  document.querySelector("main").style.display = "block";
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  document.querySelectorAll(".event").forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 300);
  });
}

function openLetter(n) {
  const texts = {
    1: "Encara que avui sigui un dia gris, recorda que sempre tens un lloc segur en mi 💛",
    2: "Si em trobes a faltar, pensa que jo també ho faig, cada dia.",
    3: "No necessito un motiu per estimar-te. Només existir."
  };
  alert(texts[n]);
}
