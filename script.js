"use-strict";

const closeModal = document.querySelector(".close-modal");
const linkedinBtn = document.querySelector(".linkedin-btn");
const linkedinBox = document.querySelector(".linkedin");

linkedinBtn.addEventListener("click", function () {
  document.querySelector(".linkedin").classList.remove("hidden");
  document.querySelector(".blur-effect").classList.remove("hidden");
});

closeModal.addEventListener("click", function () {
  document.querySelector(".linkedin").classList.add("hidden");
  document.querySelector(".blur-effect").classList.add("hidden");
});

document.querySelector(".blur-effect").addEventListener("click", function () {
  document.querySelector(".linkedin").classList.add("hidden");
  document.querySelector(".blur-effect").classList.add("hidden");
  document.querySelector(".resume").classList.add("hidden");
  document.querySelector(".contact-box").style.display = "none";
});

document.querySelector(".resume-btn").addEventListener("click", function () {
  document.querySelector(".resume").classList.remove("hidden");
  document.querySelector(".blur-effect").classList.remove("hidden");
});

document.querySelector(".close-modal-1").addEventListener("click", function () {
  document.querySelector(".resume").classList.add("hidden");
  document.querySelector(".blur-effect").classList.add("hidden");
});

/*
document.querySelector(".contact-btn").addEventListener("click", function () {
  document.querySelector(".contact-box").classList.remove("hidden");
  document.querySelector(".blur-effect").classList.remove("hidden");
}); */

document.querySelector(".close-modal-2").addEventListener("click", function () {
  document.querySelector(".contact-box").style.display = "none";
  document.querySelector(".blur-effect").classList.add("hidden");
});

document.querySelector(".contact-btn").addEventListener("click", function () {
  document.querySelector(".contact-box").style.display = "inline-block";
  document.querySelector(".blur-effect").classList.remove("hidden");
});
