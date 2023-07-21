document
  .querySelector(".input_text._name")
  .addEventListener("keyup", function () {
    this.value = this.value.replace(/[^[a-zA-Z \d -]/g, "");
  });
document
  .querySelector(".input_text._id")
  .addEventListener("keyup", function () {
    this.value = this.value.replace(/[^[a-zA-Z \d -]/g, "");
  });
const scrollToLink = (link) => {
  const id = link.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};
const links = document.querySelectorAll('a[href*="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToLink(link);
  });
});
