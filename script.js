const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const customCursor = document.querySelector(".custom-cursor");
const cursorRing = document.querySelector(".cursor-ring");
const cursorDot = document.querySelector(".cursor-dot");
const interactiveSelector = [
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "summary",
    "label",
    "[role='button']",
    "[tabindex]:not([tabindex='-1'])",
    ".button",
    ".card",
    ".menu-item",
    ".gallery-item",
    ".testimonial",
    ".social-link",
    ".submit-button",
    ".nav-link",
    ".policy-link"
].join(", ");

const shouldEnableCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    && Boolean(customCursor && cursorRing && cursorDot);

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

if (shouldEnableCustomCursor) {
    document.body.classList.add("custom-cursor-enabled");
    customCursor.classList.add("is-visible");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let hoverState = false;
    let pressTimerId = null;

    const updateHoverState = () => {
        customCursor.classList.toggle("is-hover", hoverState);
    };

    const triggerPressState = () => {
        customCursor.classList.remove("is-pressed");
        requestAnimationFrame(() => {
            customCursor.classList.add("is-pressed");
            window.clearTimeout(pressTimerId);
            pressTimerId = window.setTimeout(() => {
                customCursor.classList.remove("is-pressed");
            }, 220);
        });
    };

    document.addEventListener("pointermove", (event) => {
        targetX = event.clientX;
        targetY = event.clientY;

        const nextHoverState = Boolean(event.target.closest(interactiveSelector));
        if (nextHoverState !== hoverState) {
            hoverState = nextHoverState;
            updateHoverState();
        }

        customCursor.classList.add("is-visible");
    }, { passive: true });

    document.addEventListener("pointerdown", () => {
        triggerPressState();
    });

    document.addEventListener("pointerup", () => {
        customCursor.classList.remove("is-pressed");
        window.clearTimeout(pressTimerId);
    });

    document.addEventListener("pointercancel", () => {
        customCursor.classList.remove("is-pressed");
        window.clearTimeout(pressTimerId);
    });

    document.addEventListener("mouseleave", () => {
        customCursor.classList.remove("is-visible");
        hoverState = false;
        updateHoverState();
    });

    const renderCursor = () => {
        ringX += (targetX - ringX) * 0.16;
        ringY += (targetY - ringY) * 0.16;

        cursorDot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(var(--cursor-scale, 1))`;

        requestAnimationFrame(renderCursor);
    };

    requestAnimationFrame(renderCursor);
}

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});