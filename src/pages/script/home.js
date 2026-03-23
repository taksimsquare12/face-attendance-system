// VARIABLES
const projectName = "AI Face Attendance System";
const totalStudents = 50;
let systemActive = true;

let registeredStudents = ["Ahmad", "Ali", "Sara", "Urooj"];

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

function generateRandomRecord() {
  let randomStudent = registeredStudents[Math.floor(Math.random() * registeredStudents.length)];
  let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  let now = new Date();
  let time = now.toLocaleTimeString();

  return {
    name: randomStudent,
    status: randomStatus,
    time: time
  };
}

// SUMMARY FUNCTION
function showSummary() {
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
}

// EVENT LISTENERS
document.getElementById("summaryBtn").addEventListener("click", showSummary);
document.getElementById("showSummaryBtn").addEventListener("click", showSummary);

// EXTRA FEATURE: Toggle System Status on Double Click
document.getElementById("output").addEventListener("dblclick", () => {
  systemActive = !systemActive;
  document.getElementById("systemActive").innerHTML = systemActive ? "Yes" : "No";
});
