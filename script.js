
// =================================
// PRINCE PORTFOLIO INTERACTIONS
// =================================


// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");


function closeMenu() {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");

  navigation.classList.remove("open");
}


if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Open menu" : "Close menu"
    );

    navigation.classList.toggle("open", !isOpen);

  });


  // Close menu after selecting a section.

  navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMenu);

  });


  // Close menu using Escape.

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });


  // Close menu when clicking outside it.

  document.addEventListener("click", event => {

    const clickedInside =
      navigation.contains(event.target) ||
      menuButton.contains(event.target);

    if (!clickedInside) {
      closeMenu();
    }

  });

}



// =================================
// SCROLL REVEAL ANIMATIONS
// =================================

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observerInstance.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );


  revealElements.forEach(element => {
    observer.observe(element);
  });

} else {

  // Fallback for older browsers.

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}



// =================================
// FOOTER YEAR
// =================================

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}



// =================================
// CLOSE MENU WHEN SCREEN RESIZES
// =================================

window.addEventListener("resize", () => {

  if (window.innerWidth > 600) {
    closeMenu();
  }

});

