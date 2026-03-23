// about.js

// PROJECT OBJECT
const projectInfo = {
  name: "AI Face Attendance System",
  year: 2026,
  active: true,
  team: ["Urooj", "Dr. Ahmed"]
};

// DISPLAY PROJECT INFO ON PAGE (Dynamic)
const aboutSection = document.querySelector("section");

const infoBox = document.createElement("div");
infoBox.className = "mt-6 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded shadow-lg";

infoBox.innerHTML = `
  <h3 class="font-bold text-lg">Project Details</h3>
  <p><strong>Name:</strong> ${projectInfo.name}</p>
  <p><strong>Year:</strong> ${projectInfo.year}</p>
  <p><strong>Status:</strong> ${projectInfo.active ? "Active ✅" : "Inactive ❌"}</p>
  <p><strong>Team:</strong> ${projectInfo.team.join(", ")}</p>
`;

aboutSection.appendChild(infoBox);


// TEAM ANIMATION EFFECT
const teamCards = document.querySelectorAll(".grid div");

teamCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";

  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 300);
});


// INTERACTIVE FEATURE (BONUS 🔥)
// Click to highlight team member
teamCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("bg-cyan-500");
    card.classList.toggle("text-white");
  });
});


// CONSOLE LOG (for debugging)
console.log("About Page Loaded:", projectInfo);