const form = document.getElementById("signupForm");
const alertBox = document.getElementById("signupAlert");
const strengthBar = document.getElementById("strengthBar");

const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", () => {
  let val = passwordInput.value;
  let strength = 0;

  if (val.length > 5) strength += 30;
  if (val.match(/[A-Z]/)) strength += 20;
  if (val.match(/[0-9]/)) strength += 20;
  if (val.match(/[^A-Za-z0-9]/)) strength += 30;

  strengthBar.style.width = strength + "%";

  if (strength < 40) strengthBar.className = "bg-red-500 h-2 rounded";
  else if (strength < 70) strengthBar.className = "bg-yellow-400 h-2 rounded";
  else strengthBar.className = "bg-green-500 h-2 rounded";
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = passwordInput.value;
  let terms = document.getElementById("terms").checked;

  if (!name || !email || !password || !terms) {
    alertBox.className = "p-3 bg-red-500 text-white rounded";
    alertBox.innerText = "Please fill all fields and accept terms!";
    alertBox.classList.remove("hidden");
    return;
  }

  // Save user (LocalStorage - Lab 4 base)
  let user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alertBox.className = "p-3 bg-green-500 text-white rounded";
  alertBox.innerText = "Signup successful!";
  alertBox.classList.remove("hidden");

  form.reset();
  strengthBar.style.width = "0%";
});