// Mouse glow
const glow = document.querySelector(".mouse-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Slide in / out
const panels = document.querySelectorAll(".panel");

function animatePanels() {
  const trigger = window.innerHeight * 0.7;

  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    const top = rect.top;

    if (top < trigger && top > -trigger) {
      panel.classList.add("active");
      panel.classList.remove("out");
    } else if (top <= -trigger) {
      panel.classList.remove("active");
      panel.classList.add("out");
    } else {
      panel.classList.remove("active");
      panel.classList.remove("out");
    }
  });
}
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", () => {
    alert("Message sent successfully 🚀");
  });
}
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const btnText = submitBtn.querySelector(".btn-text");
    const loader = submitBtn.querySelector(".loader");
    const status = document.querySelector(".form-status");

    btnText.textContent = "Sending...";
    loader.classList.remove("hidden");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        status.textContent = "Message sent successfully 🚀";
        status.classList.add("success");
      } else {
        status.textContent = "Something went wrong. Try again.";
        status.classList.add("error");
      }
    } catch (error) {
      status.textContent = "Network error. Please try later.";
      status.classList.add("error");
    }

    btnText.textContent = "Send Message";
    loader.classList.add("hidden");
  });
}
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("hide"); // scrolling down
  } else {
    navbar.classList.remove("hide"); // scrolling up
  }

  lastScroll = currentScroll;
});

window.addEventListener("scroll", animatePanels);
animatePanels();
