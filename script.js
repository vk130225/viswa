// ===== MOUSE + CURSOR =====

const glow = document.querySelector(".mouse-glow");
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (glow) {
    glow.style.left = mouseX + "px";
    glow.style.top = mouseY + "px";
  }

  if (dot) {
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  }
});

function animate() {
  outlineX += (mouseX - outlineX) * 0.3;  // FASTER
  outlineY += (mouseY - outlineY) * 0.3;  // FASTER

  if (outline) {
    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";
  }

  requestAnimationFrame(animate);
}

animate();

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => outline.classList.add("hover"));
  el.addEventListener("mouseleave", () => outline.classList.remove("hover"));
});


// ===== PANEL SCROLL =====

const panels = document.querySelectorAll(".panel");

function handleScroll() {
  const trigger = window.innerHeight * 0.8;

  panels.forEach(panel => {
    const top = panel.getBoundingClientRect().top;

    if (top < trigger && top > -trigger) {
      panel.classList.add("active");
      panel.classList.remove("out");
    } else if (top <= -trigger) {
      panel.classList.remove("active");
      panel.classList.add("out");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);


// ===== NAVBAR HIDE =====

let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;

  if (current > lastScroll) {
    nav.style.top = "-100px";
  } else {
    nav.style.top = "0";
  }

  lastScroll = current;
});
