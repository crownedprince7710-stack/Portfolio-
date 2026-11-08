/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections = document.querySelectorAll("section");

const navLinksArray = document.querySelectorAll(".nav-link");


const sectionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentSection = entry.target.id;


                navLinksArray.forEach(link => {

                    link.classList.remove("active");


                    if (
                        link.getAttribute("href") ===
                        `#${currentSection}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        threshold: 0.45
    }

);


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

navLinksArray.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =====================================================
   PARALLAX HERO
===================================================== */

const heroContent = document.querySelector(".hero-content");
const heroBackground = document.querySelector(".hero-background");


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroContent.style.transform =
            `translateY(${scrollPosition * 0.18}px)`;

        heroBackground.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

        heroContent.style.opacity =
            1 - scrollPosition / (window.innerHeight * 0.9);

    }

});


/* =====================================================
   MOUSE MOVEMENT EFFECT
===================================================== */

const hero = document.querySelector(".hero");


hero.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;


    heroBackground.style.transform =
        `translate(${x}px, ${y}px)`;

});


hero.addEventListener("mouseleave", () => {

    heroBackground.style.transform =
        "translate(0, 0)";

});


/* =====================================================
   PROJECT CARD TILT
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX = rect.width / 2;
        const centerY = rect.height / 2;


        const rotateX =
            (y - centerY) / 30;

        const rotateY =
            (centerX - x) / 30;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateX(10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateX(0)";

    });

});


/* =====================================================
   PAGE LOAD ANIMATION
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelectorAll(".hero .reveal")
            .forEach(element => {

                element.classList.add("active");

            });

    }, 200);

});