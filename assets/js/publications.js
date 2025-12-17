document.addEventListener("click", function (e) {
  const a = e.target.closest("a.pub-abs");
  if (!a) return;
  e.preventDefault();
  const id = a.getAttribute("data-abs-id");
  const box = document.getElementById(id);
  if (!box) return;
  box.classList.toggle("is-open");
});
