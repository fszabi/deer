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

const closeIcon = document.querySelector(".popup-image i");

const leftArrow = document.querySelector(".arrow-left");

const rightArrow = document.querySelector(".arrow-right");

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

  const kislang = [
    "assets/kislang/kislang_1.webp",
    "assets/kislang/kislang_2.webp",
    "assets/kislang/kislang_3.webp",
    "assets/kislang/kislang_4.webp",
    "assets/kislang/kislang_5.webp",
  ];

  const tamasi = [
    "assets/tamasi/tamasi_1.webp",
    "assets/tamasi/tamasi_2.webp",
    "assets/tamasi/tamasi_3.webp",
    "assets/tamasi/tamasi_4.webp",
    "assets/tamasi/tamasi_5.webp",
  ];

  const jaszbereny = [
    "assets/jaszbereny/jaszbereny_1.webp",
    "assets/jaszbereny/jaszbereny_2.webp",
    "assets/jaszbereny/jaszbereny_3.webp",
    "assets/jaszbereny/jaszbereny_4.webp",
    "assets/jaszbereny/jaszbereny_5.webp",
    "assets/jaszbereny/jaszbereny_6.webp",
    "assets/jaszbereny/jaszbereny_7.webp",
  ];

  const petofi = [
    "assets/petofi/petofi_1.webp",
    "assets/petofi/petofi_2.webp",
    "assets/petofi/petofi_3.webp",
    "assets/petofi/petofi_4.webp",
  ];

  referenceimages.forEach((image) => {
    image.addEventListener("click", () => {
      popup.style.visibility = "visible";
      popup.style.opacity = "1";
      body.style.overflow = "hidden";
      const imageSrc = image.getAttribute("src");
      let i = 0;

      if (imageSrc === "assets/kislang/kislang_1.webp") {
        popupimage.src = kislang[i];

        i = 0;

        rightArrow.addEventListener("click", () => {
          if (i < kislang.length - 1) {
            i++;
            popupimage.src = kislang[i];
            console.log(i);
          }
        });

        leftArrow.addEventListener("click", () => {
          if (i > 0) {
            i--;
            popupimage.src = kislang[i];
            console.log(i);
          }
        });
      } else if (imageSrc === "assets/tamasi/tamasi_1.webp") {
        popupimage.src = tamasi[i];

        i = 0;

        rightArrow.addEventListener("click", () => {
          if (i < tamasi.length - 1) {
            i++;
            popupimage.src = tamasi[i];
            console.log(i);
          }
        });

        leftArrow.addEventListener("click", () => {
          if (i > 0) {
            i--;
            popupimage.src = tamasi[i];
            console.log(i);
          }
        });
      } else if (imageSrc === "assets/jaszbereny/jaszbereny_1.webp") {
        popupimage.src = jaszbereny[i];

        i = 0;

        rightArrow.addEventListener("click", () => {
          if (i < jaszbereny.length - 1) {
            i++;
            popupimage.src = jaszbereny[i];
            console.log(i);
          }
        });

        leftArrow.addEventListener("click", () => {
          if (i > 0) {
            i--;
            popupimage.src = jaszbereny[i];
            console.log(i);
          }
        });
      } else if (imageSrc === "assets/petofi/petofi_1.webp") {
        popupimage.src = petofi[i];

        i = 0;

        rightArrow.addEventListener("click", () => {
          if (i < petofi.length - 1) {
            i++;
            popupimage.src = petofi[i];
            console.log(i);
          }
        });

        leftArrow.addEventListener("click", () => {
          if (i > 0) {
            i--;
            popupimage.src = petofi[i];
            console.log(i);
          }
        });
      }
    });
  });

  closeIcon.addEventListener("click", () => {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    body.style.overflow = "visible";
  });
}
