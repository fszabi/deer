window.onload = events;

const scrollWatcher = document.createElement("div");

const header = document.querySelector(".primary-header");

const navcontainer = document.querySelector(".primary-navigation-container");

const nav = document.querySelector(".primary-navigation");

const navlinks = document.body.querySelectorAll(".primary-navigation a");

const hamburger = document.querySelector(".btn--hamburger");

const scrollButton = document.querySelector(".btn--scroll-top");

const body = document.querySelector("body");

const references = document.body.querySelectorAll(".reference");

const referenceimages = document.body.querySelectorAll(".reference img");

const popup = document.querySelector(".popup-image");

const popupimage = document.querySelector(".popup-image img");

const closeIcon = document.querySelector(".close");

scrollWatcher.setAttribute("data-scroll-watcher", "");

header.before(scrollWatcher);

// Header

scrollWatcher.setAttribute("data-scroll-watcher", "");

header.before(scrollWatcher);

// Scroll top button

const scrollButtonObserver = new IntersectionObserver(
  (entries) => {
    // Toggle scrollButton visibility

    scrollButton.classList.toggle("visible", !entries[0].isIntersecting);

    scrollButton.addEventListener("click", () => {
      scrollTop();
    });

    function scrollTop() {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Firefox, Chrome, Opera
    }
  },
  { rootMargin: "2000px 0px 0px 0px" }
);

scrollButtonObserver.observe(scrollWatcher);

// Events on load

function events() {
  if (window.innerWidth < 960) {
    navcontainer.setAttribute("data-visible", "false");
    nav.setAttribute("data-visible", "false");
    hamburger.setAttribute("aria-expanded", "false");
  } else {
    navcontainer.removeAttribute("data-visible");
    nav.removeAttribute("data-visible");
    hamburger.removeAttribute("aria-expanded");
  }

  window.addEventListener("resize", function () {
    const currentState = hamburger.getAttribute("data-state");

    if (window.innerWidth < 960) {
      if (currentState === "closed" || !currentState) {
        navcontainer.setAttribute("data-visible", "false");
        nav.setAttribute("data-visible", "false");
        hamburger.setAttribute("aria-expanded", "false");
      }
    } else {
      navcontainer.removeAttribute("data-visible");
      nav.removeAttribute("data-visible");
      hamburger.removeAttribute("aria-expanded");
      hamburger.removeAttribute("data-state");
    }
  });

  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
      if (window.innerWidth < 960) {
        hamburger.setAttribute("data-state", "closed");
        hamburger.setAttribute("aria-expanded", "false");
        navcontainer.setAttribute("data-visible", "false");
        nav.setAttribute("data-visible", "false");
      }
    });
  }

  hamburger.addEventListener("click", () => {
    const currentState = hamburger.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      hamburger.setAttribute("data-state", "opened");
      hamburger.setAttribute("aria-expanded", "true");
      navcontainer.setAttribute("data-visible", "true");
      nav.setAttribute("data-visible", "true");
    } else {
      hamburger.setAttribute("data-state", "closed");
      hamburger.setAttribute("aria-expanded", "false");
      navcontainer.setAttribute("data-visible", "false");
      nav.setAttribute("data-visible", "false");
    }
  });

  document
    .querySelectorAll("input[required], textarea[required]")
    .forEach((e) => {
      e.addEventListener("focusout", () => {
        e.style.borderColor = !!e.value
          ? "var(--clr-neutral-100)"
          : "var(--clr-primary-300)";
      });
    });

  document.querySelectorAll("input[type='email']").forEach((e) => {
    e.addEventListener("focusout", () => {
      e.style.borderColor = !!e.value.includes("@")
        ? "var(--clr-neutral-100)"
        : "var(--clr-primary-300)";
    });
  });

  referenceimages.forEach((image) => {
    image.addEventListener("click", () => {
      popup.style.visibility = "visible";
      popup.style.opacity = "1";
      body.style.overflow = "hidden";
      const imageSrc = image.getAttribute("src");
      popupimage.src = imageSrc;
    });
  });

  closeIcon.addEventListener("click", () => {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    body.style.overflow = "visible";
    popupimage.src = "";
  });
}
