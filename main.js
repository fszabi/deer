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

const close = document.querySelector(".popup-image span");

scrollWatcher.setAttribute("data-scroll-watcher", "");

header.before(scrollWatcher);

// Header

scrollWatcher.setAttribute("data-scroll-watcher", "");

header.before(scrollWatcher);

const headerObserver = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    // Toggle header color, box-shadow and navigation links color

    header.classList.toggle("sticky", !entries[0].isIntersecting);
    header.classList.toggle("box-shadow-1", !entries[0].isIntersecting);
    hamburger.classList.toggle("sticky", !entries[0].isIntersecting);
    for (var i = 0; i < navlinks.length; i++) {
      navlinks[i].classList.toggle("sticky", !entries[0].isIntersecting);
    }
  },
  { rootMargin: "100px 0px 0px 0px" }
);

headerObserver.observe(scrollWatcher);

// Scroll top button

const scrollButtonObserver = new IntersectionObserver(
  (entries) => {
    console.log(entries);

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
  for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
      const currentState = hamburger.getAttribute("data-state");
      const visibility =
        nav.getAttribute("data-visible") &&
        navcontainer.getAttribute("data-visible");

      if (!currentState || currentState === "closed") {
        hamburger.setAttribute("data-state", "opened");
        hamburger.setAttribute("aria-expanded", "true");
      } else {
        hamburger.setAttribute("data-state", "closed");
        hamburger.setAttribute("aria-expanded", "false");
      }

      if (visibility === "false") {
        navcontainer.setAttribute("data-visible", "true");
        nav.setAttribute("data-visible", "true");
      } else {
        navcontainer.setAttribute("data-visible", "false");
        nav.setAttribute("data-visible", "false");
      }
    });
  }

  hamburger.addEventListener("click", () => {
    const currentState = hamburger.getAttribute("data-state");
    const visibility =
      nav.getAttribute("data-visible") &&
      navcontainer.getAttribute("data-visible");

    if (!currentState || currentState === "closed") {
      hamburger.setAttribute("data-state", "opened");
      hamburger.setAttribute("aria-expanded", "true");
    } else {
      hamburger.setAttribute("data-state", "closed");
      hamburger.setAttribute("aria-expanded", "false");
    }

    if (!visibility | (visibility === "false")) {
      navcontainer.setAttribute("data-visible", "true");
      nav.setAttribute("data-visible", "true");
    } else {
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
      popupimage.src = image.getAttribute("src");
    });
  });

  close.addEventListener("click", () => {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    body.style.overflow = "visible";
  });
}
