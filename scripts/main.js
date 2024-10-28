// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

// Add your javascript here
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Use fetch API to submit the form data to Formspree
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for your submission!"); // Optional success message
        form.reset(); // Clear the form fields
      } else {
        alert("There was a problem with your submission."); // Optional error message
      }
    })
    .catch((error) => {
      alert("There was a problem with your submission."); // Optional error message
    });
});
