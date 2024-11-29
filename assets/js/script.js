'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

/**
 * booking modal
 */

const bookNowBtns = document.querySelectorAll("[data-book-now]");
const bookingModal = document.getElementById("booking-modal");
const closeModalBtn = document.getElementById("close-modal");
const destinationInput = document.getElementById("destination");

bookNowBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const destination = this.getAttribute("data-destination");
    destinationInput.value = destination;
    bookingModal.style.display = "block";
  });
});

closeModalBtn.addEventListener("click", function () {
  bookingModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == bookingModal) {
    bookingModal.style.display = "none";
  }
});

/**
 * login and register modals
 */

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const closeLoginModalBtn = document.getElementById("close-login-modal");
const closeRegisterModalBtn = document.getElementById("close-register-modal");

loginBtn.addEventListener("click", function () {
  loginModal.style.display = "block";
});

registerBtn.addEventListener("click", function () {
  registerModal.style.display = "block";
});

closeLoginModalBtn.addEventListener("click", function () {
  loginModal.style.display = "none";
});

closeRegisterModalBtn.addEventListener("click", function () {
  registerModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
});