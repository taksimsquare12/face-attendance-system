// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  if (!form) return;

  // LIVE INPUT VALIDATION
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.classList.add("border-green-500");
        input.classList.remove("border-red-500");
      } else {
        input.classList.add("border-red-500");
        input.classList.remove("border-green-500");
      }
    });
  });

  // FORM SUBMIT
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    // VALIDATION
    if (name === "" || !email.includes("@") || message === "") {
      showAlert("❌ Please fill all fields correctly.", "error");
      return;
    }

    // LOADING STATE
    showAlert("⏳ Sending message...", "info");

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showAlert("✅ Message sent successfully!", "success");
        form.reset();
        inputs.forEach(i => i.classList.remove("border-green-500"));
      } else {
        showAlert("❌ Error sending message.", "error");
      }
    } catch (error) {
      showAlert("❌ Network error. Try again.", "error");
    }
  });

  // ALERT FUNCTION
  function showAlert(message, type) {
    alertBox.textContent = message;
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

    alertBox.className = `p-4 mb-4 text-sm rounded-lg ${style}`;
    alertBox.classList.remove("hidden");

    // AUTO HIDE
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 4000);
  }
});
