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
console.log("1. +10 /n 2. +16 /n 3. +54 /n 4. +20 /n total=100 :)");
