const form = document.getElementById("content");
const successMessage = document.getElementById("success-message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector("input[name='query-type']:checked");
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  const formAlert = document.querySelectorAll(".alert");
  let isValid = true;

  // First Name Validation
  if (fname === "") {
    isValid = false;

    document.querySelector("#fname + .alert").style.display = "block";
    document.querySelector("#fname").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#fname + .alert").style.display = "none";
    document.querySelector("#fname").style.border = "1px solid var(--Grey-500)";
    ("1px solid var(--grey--500)");
  }

  // last name validation
  if (lname === "") {
    isValid = false;

    document.querySelector("#lname + .alert").style.display = "block";
    document.querySelector("#lname").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#lname + .alert").style.display = "none";
    document.querySelector("#lname").style.border = "1px solid var(--Grey-500)";
    ("1px solid var(--grey--500)");
  }

  // Email validation
  if (!isValidEmail(email)) {
    isValid = false;

    document.querySelector("#email + .alert").style.display = "block";
    document.querySelector("#email").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#email + .alert").style.display = "none";
    document.querySelector("#email").style.border = "1px solid var(--Grey-500)";
  }

  // query type validation
  if (!queryType) {
    isValid = false;

    document.querySelector(".radio-inputs + .alert").style.display = "block";
  } else {
    document.querySelector(".radio-inputs + .alert").style.display = "none";
  }
  // Message validation
  if (message === "") {
    isValid = false;
    document.querySelector("#message + .alert").style.display = "block";
    document.querySelector("#message").style.display = "1px solid var(--Red)";
  } else {
    document.querySelector("#message + .alert").style.display = "none";
    document.querySelector("#message").style.display =
      "1px solid var(--Grey-500)";
  }
  // Consent validation
  if (!consent) {
    isValid = false;

    formAlert[5].classList.add("error");
  } else {
    formAlert[5].classList.remove("error");
  }

  // Form is Valid
  if (isValid) {
    successMessage.classList.add("active");
    form.reset();
  }
});

// Email Validation Function
function isValidEmail(email) {
  const emailReges = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailReges.test(email);
}
