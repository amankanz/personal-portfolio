//header toggle

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile_nav_active");
  this.classList.toggle("fa-xmark");
});

//Typing effect

let typed = new Typed(".auto_input", {
  strings: ["Software Engineer!", "Web Developer!", "Front-End Engineer!"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

//Active link on scroll

// Grab All links
let navLinks = document.querySelectorAll("nav ul li a");

// Grab All Sections
let sections = document.querySelectorAll("section");
console.log(sections);

window.addEventListener("scroll", function () {
  const scrollPositon = window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPositon > section.offsetTop &&
      scrollPositon < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
