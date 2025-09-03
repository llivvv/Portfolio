const navList = document.querySelector(".nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navItems = document.querySelectorAll(".nav-item");

navToggle.addEventListener("click", () => {
  const visibility = navList.getAttribute("data-visible");

  if (visibility === "false") {
    navList.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navList.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// close menu when an anchor link is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const visibility = navList.getAttribute("data-visible");

    navList.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  });
});
