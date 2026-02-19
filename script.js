// ==========================
// UNIVERSAL CURSOR + GLOW
// ==========================

const glow = document.querySelector(".mouse-glow");
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let outlineX = 0;
let outlineY = 0;
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (glow) {
    glow.style.left = mouseX + "px";
    glow.style.top = mouseY + "px";
  }

  if (cursorDot) {
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";
  }
});

// Smooth trailing circle
function animateOutline() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;

  if (cursorOutline) {
    cursorOutline.style.left = outlineX + "px";
    cursorOutline.style.top = outlineY + "px";
  }

  requestAnimationFrame(animateOutline);
}

animateOutline();

// Hover expansion
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    if (cursorOutline) cursorOutline.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    if (cursorOutline) cursorOutline.classList.remove("hover");
  });
});


// ==========================
// PANEL ANIMATION (Safe)
// ==========================

const panels = document.querySelectorAll(".panel");

function animatePanels() {
  if (!panels.length) return;

  const triggerPoint = window.innerHeight * 0.85;

  panels.forEach(panel => {
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


// ==========================
// NAVBAR HIDE ON SCROLL
// ==========================

let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (!navbar) return;

  if (currentScroll > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
