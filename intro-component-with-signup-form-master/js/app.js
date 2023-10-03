"use strict";

console.log("This is working");

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

console.log("this is the form", form);
console.log("this is the email", email);

// form.addEventListener(
//   "invalid",
//   function (event) {
//     event.preventDefault();
//   },
//   true
// );

// email.addEventListener("input", (event) => {
//   // Each time the user types something, we check if the
//   // form fields are valid.

//   if (email.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     emailError.textContent = ""; // Reset the content of the message
//     emailError.className = "error"; // Reset the visual state of the message
//   } else {
//     // If there is still an error, show the correct error
//     showError();
//   }
// });

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "You have to enter an email address";
  }
}
