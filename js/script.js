document.querySelectorAll("[data-favorite]").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("is-active");
    const active = btn.classList.contains("is-active");
    btn.setAttribute(
      "aria-label",
      active ? "Remove from favorites" : "Add to favorites"
    );
  });
});

document.querySelectorAll(".btn--primary, .btn--glass").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("See more clicked — hook up navigation here.");
  });
});