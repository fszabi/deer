window.onload = events;

const scrollWatcher = document.createElement("div");
const header = document.querySelector(".primary-header");
const navcontainer = document.querySelector(".primary-navigation-container");
const nav = document.querySelector(".primary-navigation");
const navlinks = document.body.querySelectorAll(".primary-navigation a");
const hamburger = document.querySelector(".btn--hamburger");
const scrollButton = document.querySelector(".btn--scroll-top");
const body = document.querySelector("body");
const kislangImg = document.body.querySelector(".kislang picture img");
const kislangPopup = document.body.querySelector(".kislang-popup");
const kislangPopupImg = document.body.querySelector(".kislang-popup img");
const jaszberenyImg = document.body.querySelector(".jaszbereny picture img");
const jaszberenyPopup = document.body.querySelector(".jaszbereny-popup");
const jaszberenyPopupImg = document.body.querySelector(".jaszbereny-popup img");
const petofiImg = document.body.querySelector(".petofi picture img");
const petofiPopup = document.body.querySelector(".petofi-popup");
const petofiPopupImg = document.body.querySelector(".petofi-popup img");
const tamasiImg = document.body.querySelector(".tamasi picture img");
const tamasiPopup = document.body.querySelector(".tamasi-popup");
const tamasiPopupImg = document.body.querySelector(".tamasi-popup img");
const trianonImg = document.body.querySelector(".trianon picture img");
const trianonPopup = document.body.querySelector(".trianon-popup");
const trianonPopupImg = document.body.querySelector(".trianon-popup img");

const closeIcon = document.querySelectorAll(".close");

const leftArrow = document.querySelectorAll(".arrow-left");

const rightArrow = document.querySelectorAll(".arrow-right");

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

  const kislang = [
    new URL("assets/kislang/kislang_1.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_2.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_3.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_4.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_5.webp", import.meta.url).href,
  ];

  const jaszbereny = [
    new URL("assets/jaszbereny/jaszbereny_1.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_2.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_3.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_4.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_5.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_6.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_7.webp", import.meta.url).href,
  ];

  const petofi = [
    new URL("assets/petofi/petofi_1.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_2.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_3.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_4.webp", import.meta.url).href,
  ];

  const tamasi = [
    new URL("assets/tamasi/tamasi_1.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_2.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_3.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_4.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_5.webp", import.meta.url).href,
  ];

  const trianon = [
    new URL("assets/trianon/trianon.webp", import.meta.url).href,
  ];

  kislangImg.addEventListener("click", () => {
    kislangPopup.style.visibility = "visible";
    kislangPopup.style.opacity = "1";
    body.style.overflow = "hidden";

    let i = 0;
    kislangPopupImg.src = kislang[i];

    rightArrow[0].addEventListener("click", () => {
      if (i < kislang.length - 1) {
        i++;
        kislangPopupImg.src = kislang[i];
        console.log(i);
      }
    });

    leftArrow[0].addEventListener("click", () => {
      if (i > 0) {
        i--;
        kislangPopupImg.src = kislang[i];
        console.log(i);
      }
    });

    closeIcon[0].addEventListener("click", () => {
      kislangPopup.style.visibility = "hidden";
      kislangPopup.style.opacity = "0";
      body.style.overflow = "visible";
      kislangPopupImg.src = "";
    });
  });

  jaszberenyImg.addEventListener("click", () => {
    jaszberenyPopup.style.visibility = "visible";
    jaszberenyPopup.style.opacity = "1";
    body.style.overflow = "hidden";

    let i = 0;
    jaszberenyPopupImg.src = jaszbereny[i];

    rightArrow[1].addEventListener("click", () => {
      if (i < jaszbereny.length - 1) {
        i++;
        jaszberenyPopupImg.src = jaszbereny[i];
        console.log(i);
      }
    });

    leftArrow[1].addEventListener("click", () => {
      if (i > 0) {
        i--;
        jaszberenyPopupImg.src = jaszbereny[i];
        console.log(i);
      }
    });

    closeIcon[1].addEventListener("click", () => {
      jaszberenyPopup.style.visibility = "hidden";
      jaszberenyPopup.style.opacity = "0";
      body.style.overflow = "visible";
      jaszberenyPopupImg.src = "";
    });
  });

  petofiImg.addEventListener("click", () => {
    petofiPopup.style.visibility = "visible";
    petofiPopup.style.opacity = "1";
    body.style.overflow = "hidden";

    let i = 0;
    petofiPopupImg.src = petofi[i];

    rightArrow[2].addEventListener("click", () => {
      if (i < petofi.length - 1) {
        i++;
        petofiPopupImg.src = petofi[i];
        console.log(i);
      }
    });

    leftArrow[2].addEventListener("click", () => {
      if (i > 0) {
        i--;
        petofiPopupImg.src = petofi[i];
        console.log(i);
      }
    });

    closeIcon[2].addEventListener("click", () => {
      petofiPopup.style.visibility = "hidden";
      petofiPopup.style.opacity = "0";
      body.style.overflow = "visible";
      petofiPopupImg.src = "";
    });
  });

  tamasiImg.addEventListener("click", () => {
    tamasiPopup.style.visibility = "visible";
    tamasiPopup.style.opacity = "1";
    body.style.overflow = "hidden";

    let i = 0;
    tamasiPopupImg.src = tamasi[i];

    rightArrow[3].addEventListener("click", () => {
      if (i < tamasi.length - 1) {
        i++;
        tamasiPopupImg.src = tamasi[i];
        console.log(i);
      }
    });

    leftArrow[3].addEventListener("click", () => {
      if (i > 0) {
        i--;
        tamasiPopupImg.src = tamasi[i];
        console.log(i);
      }
    });

    closeIcon[3].addEventListener("click", () => {
      tamasiPopup.style.visibility = "hidden";
      tamasiPopup.style.opacity = "0";
      body.style.overflow = "visible";
      tamasiPopupImg.src = "";
    });
  });

  trianonImg.addEventListener("click", () => {
    trianonPopup.style.visibility = "visible";
    trianonPopup.style.opacity = "1";
    body.style.overflow = "hidden";

    let i = 0;
    trianonPopupImg.src = trianon[i];

    closeIcon[4].addEventListener("click", () => {
      trianonPopup.style.visibility = "hidden";
      trianonPopup.style.opacity = "0";
      body.style.overflow = "visible";
      trianonPopupImg.src = "";
    });
  });
}
