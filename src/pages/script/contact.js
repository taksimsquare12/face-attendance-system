// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.querySelector("input[name='name']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const message = form.querySelector("textarea[name='message']").value.trim();

      // Basic Validation
      if (name === "" || !email.includes("@") || message === "") {
        alertBox.textContent = "❌ Please fill all fields correctly.";
        alertBox.className = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400";
        alertBox.classList.remove("hidden");
        return;
      }

      // Send Data to Formspree
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          alertBox.textContent = "✅ Your message has been sent successfully!";
          alertBox.className = "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-700 dark:text-green-400";
          alertBox.classList.remove("hidden");
          form.reset();
        } else {
          alertBox.textContent = "❌ There was an error sending your message.";
          alertBox.className = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400";
          alertBox.classList.remove("hidden");
        }
      } catch (error) {
        alertBox.textContent = "❌ Network error. Please try again.";
        alertBox.className = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400";
        alertBox.classList.remove("hidden");
      }
    });
  }
});
