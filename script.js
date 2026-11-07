
// =========================================
// ARQUM JAMAL - PORTFOLIO JAVASCRIPT
// =========================================


// 1. Mobile Navigation

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.classList.toggle("is-open", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    // Close menu after clicking a navigation link

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");
            menuToggle.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");

        });

    });

}


// 2. Active Navigation Link

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach((link) => {

                        const isActive =
                            link.getAttribute("href") ===
                            `#${entry.target.id}`;

                        link.classList.toggle("active", isActive);

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    sections.forEach((section) => {

        sectionObserver.observe(section);

    });

}


// 3. Automatic Footer Year

const yearElement = document.querySelector("#year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// 4. Back To Top Button

const backToTop = document.querySelector("#backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 450) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    }, {
        passive: true
    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
