// VARIABLES
const projectName = "AI Face Attendance System";
const totalStudents = 50;
let systemActive = true;

const registeredStudents = ["Ahmad", "Ali", "Sara", "Urooj"];

let studentRecord = {
  name: "Ahmad",
  status: "Present",
  time: "9:00 AM"
};

// DISPLAY DATA INIT
document.getElementById("projectName").innerHTML = projectName;
document.getElementById("totalStudents").innerHTML = totalStudents;
document.getElementById("systemActive").innerHTML = systemActive ? "Yes" : "No";
document.getElementById("registeredStudents").innerHTML = registeredStudents.join(", ");
document.getElementById("studentRecord").innerHTML =
  `${studentRecord.name} - ${studentRecord.status} at ${studentRecord.time}`;

// RANDOM STATUS SIMULATION
const statuses = ["Present", "Absent", "Late"];

const generateRandomRecord = () => {
  const randomStudent = registeredStudents[Math.floor(Math.random() * registeredStudents.length)];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const now = new Date();
  const time = now.toLocaleTimeString();

  return { name: randomStudent, status: randomStatus, time };
};

// SUMMARY FUNCTION
const showSummary = () => {
  const registeredCount = registeredStudents.length;
  const percentageRegistered = ((registeredCount / totalStudents) * 100).toFixed(1);

  // Generate dynamic record
  studentRecord = generateRandomRecord();

  // Update studentRecord span
  document.getElementById("studentRecord").innerHTML =
    `${studentRecord.name} - ${studentRecord.status} at ${studentRecord.time}`;

  // Inject summary into output div
  document.getElementById("output").innerHTML = `
    <strong>System Summary:</strong><br>
    Project: ${projectName}<br>
    Status: ${systemActive ? "✅ Active" : "❌ Inactive"}<br>
    Registered Students: ${registeredCount} (${percentageRegistered}%)<br>
    Latest Record: ${studentRecord.name} (${studentRecord.status} at ${studentRecord.time})<br>
    AI Detection Mode: Smart Recognition Enabled 🤖<br>
    System Health: Running smoothly with secure AI verification
  `;
};

// EVENT LISTENERS
document.getElementById("summaryBtn").addEventListener("click", showSummary);
document.getElementById("showSummaryBtn").addEventListener("click", showSummary);

// EXTRA FEATURE: Toggle System Status on Double Click
document.getElementById("output").addEventListener("dblclick", () => {
  systemActive = !systemActive;
  document.getElementById("systemActive").innerHTML = systemActive ? "Yes" : "No";
});

// ✅ Object CRUD demo (Task 5)
studentRecord.department = "Computer Science"; // Create
console.log(`Student: ${studentRecord.name}`); // Read
studentRecord.status = "Late"; // Update
delete studentRecord.time; // Delete

// ✅ String Methods demo (Task 6)
const rawName = "   Ahmad Ali   ";
console.log(rawName.trim().toUpperCase());   // TRIM + UPPERCASE
console.log(rawName.includes("Ali"));        // INCLUDES
console.log(rawName.replace("Ali", "Khan")); // REPLACE
console.log(rawName.slice(0,5));             // SLICE
console.log(rawName.startsWith("Ah"));       // STARTSWITH
console.log(rawName.endsWith("li"));         // ENDSWITH
console.log(rawName.split(" "));             // SPLIT
console.log(rawName.concat(" - Student"));   // CONCAT
