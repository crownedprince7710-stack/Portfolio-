
// ====================================
// PRINCE PORTFOLIO — INTERACTIONS
// ====================================

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// MOBILE NAVIGATION

function closeMenu() {
  if (!menuButton || !nav) return;

  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const open =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);

  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", event => {
    if (
      !nav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

}

// CLOSE MENU ON DESKTOP RESIZE

window.addEventListener("resize", () => {
  if (window.innerWidth > 560) {
    closeMenu();
  }
});


// SCROLL REVEAL

const revealTargets = document.querySelectorAll(
  ".project-card, .interest-grid article, .journey-list article, .about-main"
);

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealTargets.forEach(element => {
    element.classList.add("reveal-ready");
    revealObserver.observe(element);
  });

} else {

  revealTargets.forEach(element => {
    element.classList.add("revealed");
  });

}


// CURRENT YEAR

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// CLOSE MENU IF ORIENTATION CHANGES

window.addEventListener("orientationchange", closeMenu);

