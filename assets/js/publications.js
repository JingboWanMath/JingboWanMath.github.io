document.addEventListener("click", function (e) {
  const link = e.target.closest(".pub-abs-toggle");
  if (!link) return;
  e.preventDefault();

  const id = link.getAttribute("data-target");
  const box = document.getElementById(id);
  if (!box) return;

  box.classList.toggle("is-open");
});
