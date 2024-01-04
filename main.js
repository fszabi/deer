window.onload = events;

const scrollWatcher = document.createElement("div");

const header = document.querySelector(".primary-header");

const navcontainer = document.querySelector(".primary-navigation-container");

const nav = document.querySelector(".primary-navigation");

const navlinks = document.body.querySelectorAll(".primary-navigation a");

const hamburger = document.querySelector(".btn--hamburger");

const scrollButton = document.querySelector(".btn--scroll-top");

const body = document.querySelector("body");

const referenceImages = document.body.querySelectorAll(".reference img");

const popup = document.querySelector(".popup-image");

const popupSourceOne = document.querySelector(".popup-image picture .source-1");

const popupSourceTwo = document.querySelector(".popup-image picture .source-2");

const popupImage = document.querySelector(".popup-image picture img");

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

  const kislang = [
    new URL("assets/kislang/kislang_1.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_2.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_3.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_4.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_5.webp", import.meta.url).href,

    new URL("assets/kislang/kislang_1_phone.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_2_phone.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_3_phone.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_4_phone.webp", import.meta.url).href,
    new URL("assets/kislang/kislang_5_phone.webp", import.meta.url).href,
  ];

  const jaszbereny = [
    new URL("assets/jaszbereny/jaszbereny_1.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_2.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_3.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_4.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_5.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_6.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_7.webp", import.meta.url).href,

    new URL("assets/jaszbereny/jaszbereny_1_phone.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_2_phone.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_3_phone.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_4_phone.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_5_phone.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_6_phone.webp", import.meta.url).href,
    new URL("assets/jaszbereny/jaszbereny_7_phone.webp", import.meta.url).href,
  ];

  const petofi = [
    new URL("assets/petofi/petofi_1.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_2.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_3.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_4.webp", import.meta.url).href,

    new URL("assets/petofi/petofi_1_phone.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_2_phone.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_3_phone.webp", import.meta.url).href,
    new URL("assets/petofi/petofi_4_phone.webp", import.meta.url).href,
  ];

  const tamasi = [
    new URL("assets/tamasi/tamasi_1.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_2.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_3.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_4.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_5.webp", import.meta.url).href,

    new URL("assets/tamasi/tamasi_1_phone.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_2_phone.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_3_phone.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_4_phone.webp", import.meta.url).href,
    new URL("assets/tamasi/tamasi_5_phone.webp", import.meta.url).href,
  ];

  const trianon = [
    new URL("assets/tamasi/trianon.webp", import.meta.url).href,
    new URL("assets/tamasi/trianon_phone.webp", import.meta.url).href,
  ];

  referenceImages.forEach((image) => {
    image.addEventListener("click", () => {
      popup.style.visibility = "visible";
      popup.style.opacity = "1";
      body.style.overflow = "hidden";
      let imagePhoneSrc = "";
      let imageSrc = "";

      imagePhoneSrc = image.getAttribute("src");
      imageSrc = image.getAttribute("src").replace("_phone", "");
      imageSrc = image.getAttribute("src");

      popupSourceOne.srcset = imageSrc;
      popupSourceTwo.srcset = imagePhoneSrc;
      popupImage.src = imageSrc;
    });
  });

  closeIcon.addEventListener("click", () => {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    body.style.overflow = "visible";
  });
}
