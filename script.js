const aboutBtn = document.getElementById("about-btn");
const examplesBtn = document.getElementById("examples-btn");
const contactBtn = document.getElementById("contact-btn");

const aboutPage = document.getElementById("about-page");
const examplesPage = document.getElementById("examples-page");
const contactPage = document.getElementById("contact-page");

aboutBtn.addEventListener("click", () => {
  aboutPage.style.display = "block";
  examplesPage.style.display = "none";
  contactPage.style.display = "none";
});

examplesBtn.addEventListener("click", () => {
  aboutPage.style.display = "none";
  examplesPage.style.display = "block";
  contactPage.style.display = "none";
});

contactBtn.addEventListener("click", () => {
  aboutPage.style.display = "none";
  examplesPage.style.display = "none";
  contactPage.style.display = "block";
});
