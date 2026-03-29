// signup.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const alertBox = document.getElementById("signupAlert");
  const strengthBar = document.getElementById("strengthBar");
  const passwordInput = document.getElementById("password");

  // ✅ Password Strength Meter
  passwordInput.addEventListener("input", () => {
    const val = passwordInput.value;
    let strength = 0;

    if (val.length > 5) strength += 30;
    if (/[A-Z]/.test(val)) strength += 20;
    if (/[0-9]/.test(val)) strength += 20;
    if (/[^A-Za-z0-9]/.test(val)) strength += 30;

    strengthBar.style.width = strength + "%";

    if (strength < 40) {
      strengthBar.className = "bg-red-500 h-2 rounded transition-all";
    } else if (strength < 70) {
      strengthBar.className = "bg-yellow-400 h-2 rounded transition-all";
    } else {
      strengthBar.className = "bg-green-500 h-2 rounded transition-all";
    }
  });

  // ✅ Form Submit
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();
    const terms = document.getElementById("terms").checked;

    if (!name || !email || !password || !terms) {
      showAlert("❌ Please fill all fields and accept terms!", "error");
      return;
    }

    // Save user (LocalStorage)
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    showAlert("✅ Signup successful!", "success");

    form.reset();
    strengthBar.style.width = "0%";
  });

  // ✅ Alert Function
  const showAlert = (message, type) => {
    let style = "";
    switch (type) {
      case "success":
        style = "text-green-800 bg-green-50 dark:bg-gray-700 dark:text-green-400";
        break;
      case "error":
        style = "text-red-800 bg-red-50 dark:bg-gray-700 dark:text-red-400";
        break;
    }

    alertBox.textContent = message;
    alertBox.className = `p-3 mb-4 rounded ${style}`;
    alertBox.classList.remove("hidden");

    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 4000);
  };

  // ---------------- EXTRA DEMOS ----------------

  // ✅ Object CRUD demo (Task 5)
  const signupInfo = { name: "Urooj", email: "urooj@example.com", status: "Active" };
  signupInfo.role = "Student"; // Create
  console.log(`Signup Name: ${signupInfo.name}`); // Read
  signupInfo.status = "Inactive"; // Update
  delete signupInfo.role; // Delete

  // ✅ String Methods demo (Task 6)
  const rawString = "   Sign Up Page   ";
  console.log(rawString.trim().toUpperCase());   // TRIM + UPPERCASE
  console.log(rawString.includes("Sign"));       // INCLUDES
  console.log(rawString.replace("Page", "Form")); // REPLACE
  console.log(rawString.slice(0,10));            // SLICE
  console.log(rawString.startsWith("Sign"));     // STARTSWITH
  console.log(rawString.endsWith("Page   "));    // ENDSWITH
  console.log(rawString.split(" "));             // SPLIT
  console.log(rawString.concat(" - Success"));   // CONCAT
});
