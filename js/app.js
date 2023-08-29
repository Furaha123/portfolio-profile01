const reviews = [
  {
    id: 1,
    name: "Nicholas Adkins",
    job: " Product Manager at SOLVIT AFRICA",
    img: "/css/images/testimonials/t2.jpg",
    text: "I did notice a couple of areas where there might be room for improvement For instance, in the user profile section, there were a few instances where  the user experience could be enhanced",
  },

  {
    id: 2,
    name: "Meech Flenory",
    job: "CEO of IBM Global",
    img: "/css/images/testimonials/t1.jpg",

    text: " I wanted to take a moment to provide you with some feedback on the recent project you completed. Overall, I'm impressed with your work and the effort you put into it. Your dedication and attention to detail are truly valuable to the team.",
  },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// const backToTopButton = document.getElementById("backToTop");

// // Function to smoothly scroll to the top of the page
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// const backToTopButton = document.getElementById("backToTop");

// // Function to handle showing/hiding the back-to-top icon
// function toggleBackToTopIcon() {
//   if (window.scrollY > 0) {
//     backToTopButton.style.opacity = 1;
//   } else {
//     backToTopButton.style.opacity = 0;
//   }
// }

// Attach scroll event listener to toggle icon visibility
// window.addEventListener("scroll", toggleBackToTopIcon);

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// // Attach a click event listener to the "backToTop" anchor
// backToTopButton.addEventListener("click", scrollToTop);

// Back to top icon
const toTop = document.getElementById("#backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

document
  .getElementById("sendMessageBtn")
  .addEventListener("click", function () {
    alert("Message sent!");
    // Clear the form fields
    var form = document.querySelector("form"); // Assuming your form element is a <form> element
    form.reset();
  });

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  //   console.log(links.classList);
  //   console.log(links.classList.contains("random"));
  //   console.log(links.classList.contains("links"));

  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  links.classList.toggle("show-links");
});
