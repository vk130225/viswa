// =============================
// MOUSE GLOW EFFECT
// =============================

const glow = document.querySelector(".mouse-glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}


// =============================
// PANEL SCROLL ANIMATION
// =============================

const panels = document.querySelectorAll(".panel");

function animatePanels() {
  const triggerPoint = window.innerHeight * 0.85;

  panels.forEach((panel) => {
    const panelTop = panel.getBoundingClientRect().top;

    if (panelTop < triggerPoint && panelTop > -200) {
      panel.classList.add("active");
      panel.classList.remove("out");
    } else {
      panel.classList.remove("active");
      panel.classList.add("out");
    }
  });
}

window.addEventListener("scroll", animatePanels);
window.addEventListener("load", animatePanels);


// =============================
// NAVBAR HIDE ON SCROLL
// =============================

let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // scrolling down
    if (navbar) navbar.style.top = "-100px";
  } else {
    // scrolling up
    if (navbar) navbar.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
