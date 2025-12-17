document.querySelectorAll(".pub-abs-toggle").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("data-target");
    const box = document.getElementById(id);
    if (!box) return;
    box.classList.toggle("is-open");
  });
});
