// signup.js
document.addEventListener("DOMContentLoaded", () => {
  // Password Strength Checker
  const passwordInput = document.getElementById("password");
  const strengthBar = document.getElementById("strengthBar");

  if (passwordInput && strengthBar) {
    passwordInput.addEventListener("input", () => {
      const value = passwordInput.value;
      let strength = 0;

      if (value.length >= 6) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;

      const classes = "h-2.5 rounded-full transition-all duration-300";
      switch (strength) {
        case 0:
          strengthBar.style.width = "0%";
          strengthBar.className = `bg-red-600 ${classes}`;
          break;
        case 1:
          strengthBar.style.width = "25%";
          strengthBar.className = `bg-red-600 ${classes}`;
          break;
        case 2:
          strengthBar.style.width = "50%";
          strengthBar.className = `bg-yellow-500 ${classes}`;
          break;
        case 3:
          strengthBar.style.width = "75%";
          strengthBar.className = `bg-blue-500 ${classes}`;
          break;
        case 4:
          strengthBar.style.width = "100%";
          strengthBar.className = `bg-green-600 ${classes}`;
          break;
      }
    });
  }

  // Sign Up Form Validation
  const form = document.getElementById("signupForm");
  const messageBox = document.getElementById("signupMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const terms = document.getElementById("terms").checked;

      if (name === "" || !email.includes("@") || password.length < 6 || !terms) {
        messageBox.textContent = "❌ Please fill all fields correctly and accept Terms.";
        messageBox.className = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400";
      } else {
        messageBox.textContent = "✅ Account created successfully!";
        messageBox.className = "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-700 dark:text-green-400";
        form.reset();
        if (strengthBar) {
          strengthBar.style.width = "0%"; // reset strength bar
        }
      }
    });
  }
});
