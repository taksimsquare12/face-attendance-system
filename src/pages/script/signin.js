// signin.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const messageBox = document.getElementById("loginMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Validation Checks
      if (!email.includes("@")) {
        messageBox.textContent = "❌ Please enter a valid email.";
        messageBox.className = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400";
        messageBox.classList.remove("hidden");
      } else if (password.length < 6) {
        messageBox.textContent = "❌ Password must be at least 6 characters.";
        messageBox.className = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400";
        messageBox.classList.remove("hidden");
      } else {
        messageBox.textContent = "✅ Login successful!";
        messageBox.className = "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-700 dark:text-green-400";
        messageBox.classList.remove("hidden");
        form.reset();
      }
    });
  }
});
