const scrollWatcher = document.createElement("div");

const header = document.querySelector(".primary-header");

const scrollButton = document.querySelector(".btn--scroll-top");

scrollWatcher.setAttribute("data-scroll-watcher", "");

header.before(scrollWatcher);

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
