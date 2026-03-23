// signin.js

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("loginForm");
  const messageBox = document.getElementById("loginMessage");

  if (!form) return;

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");


  // LIVE VALIDATION 🔥
  emailInput.addEventListener("input", () => {
    if (emailInput.value.includes("@")) {
      emailInput.classList.add("border-green-500");
      emailInput.classList.remove("border-red-500");
    } else {
      emailInput.classList.add("border-red-500");
      emailInput.classList.remove("border-green-500");
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length >= 6) {
      passwordInput.classList.add("border-green-500");
      passwordInput.classList.remove("border-red-500");
    } else {
      passwordInput.classList.add("border-red-500");
      passwordInput.classList.remove("border-green-500");
    }
  });


  // FORM SUBMIT
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email.includes("@")) {
      showMessage("❌ Enter valid email", "error");
      return;
    }

    if (password.length < 6) {
      showMessage("❌ Password must be at least 6 characters", "error");
      return;
    }

    // SIMULATED LOGIN (AI FEEL 🤖)
    showMessage("⏳ Verifying credentials...", "info");

    setTimeout(() => {
      showMessage("✅ Login successful!", "success");
      form.reset();

      emailInput.classList.remove("border-green-500");
      passwordInput.classList.remove("border-green-500");

    }, 1500);
  });


  // MESSAGE FUNCTION 🔔
  function showMessage(text, type) {

    let style = "";

    switch (type) {
      case "success":
        style = "text-green-800 bg-green-50 dark:bg-gray-700 dark:text-green-400";
        break;
      case "error":
        style = "text-red-800 bg-red-50 dark:bg-gray-700 dark:text-red-400";
        break;
      case "info":
        style = "text-blue-800 bg-blue-50 dark:bg-gray-700 dark:text-blue-400";
        break;
    }

    messageBox.textContent = text;
    messageBox.className = `p-4 mb-4 text-sm rounded-lg ${style}`;
    messageBox.classList.remove("hidden");

    // AUTO HIDE
    setTimeout(() => {
      messageBox.classList.add("hidden");
    }, 4000);
  }

});