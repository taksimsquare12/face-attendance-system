// home.js

// Step 1: Declare Variables (different data types)
const projectName = "AI Face Attendance System"; // String
const totalStudents = 50; // Number
const systemActive = true; // Boolean
const registeredStudents = ["Ahmad", "Ali", "Sara", "Urooj"]; // Array
const studentRecord = { name: "Ahmad", status: "Present", time: "9:00 AM" }; // Object

// Step 2: Display Variables Using DOM
document.getElementById("projectName").innerHTML = projectName;
document.getElementById("totalStudents").innerHTML = totalStudents;
document.getElementById("systemActive").innerHTML = systemActive ? "Yes" : "No";
document.getElementById("registeredStudents").innerHTML = registeredStudents.join(", ");
document.getElementById("studentRecord").innerHTML = `${studentRecord.name} - ${studentRecord.status} at ${studentRecord.time}`;

// Step 3: Arrow Function for Project Logic(updated summary function)
const showSummary = () => {
  const registeredCount = registeredStudents.length;
  const percentageRegistered = ((registeredCount / totalStudents) * 100).toFixed(1);

  return `
    <strong>System Summary:</strong><br>
    Project: ${projectName}<br>
    Status: ${systemActive ? "✅ Active" : "❌ Inactive"}<br>
    Registered Students: ${registeredCount} (${percentageRegistered}% of total)<br>
    Latest Record: ${studentRecord.name} (${studentRecord.status} at ${studentRecord.time})<br>
    Overall Accuracy: 95%<br>
    System Health: Running smoothly with secure AI verification
  `;
};


// Step 4: Click Event to Trigger Arrow Function
document.getElementById("summaryBtn").addEventListener("click", () => {
  document.getElementById("output").innerHTML = showSummary();
});
