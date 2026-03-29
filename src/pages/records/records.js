// records.js

// Step 1: Array of Objects
let students = [
  { id: 1, name: "Ahmad", status: "Present" },
  { id: 2, name: "Ali", status: "Late" },
  { id: 3, name: "Sara", status: "Absent" },
  { id: 4, name: "Urooj", status: "Present" }
];

// DOM Elements
const grid = document.getElementById("studentGrid");
const addForm = document.getElementById("addForm");
const searchBox = document.getElementById("searchBox");

// Step 2: Display Array of Objects (Cards)
const renderCards = (list = students) => {
  grid.innerHTML = list.map(s => `
    <div class="bg-gray-900 p-4 rounded shadow-lg dark:bg-gray-200 dark:text-black">
      <h3 class="text-cyan-400 font-bold">${s.name}</h3>
      <p>Status: ${s.status}</p>
      <div class="mt-2 flex gap-2">
        <button onclick="editStudent(${s.id})" class="px-2 py-1 bg-blue-500 rounded">Edit</button>
        <button onclick="deleteStudent(${s.id})" class="px-2 py-1 bg-red-500 rounded">Delete</button>
      </div>
    </div>
  `).join("");
};
renderCards();

// Step 3: Add New Object (Form + push)
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("newName").value.trim();
  const status = document.getElementById("newStatus").value;
  if (name) {
    students.push({ id: Date.now(), name, status });
    renderCards();
    e.target.reset();
  }
});

// Step 4: Delete (filter)
window.deleteStudent = id => {
  students = students.filter(s => s.id !== id);
  renderCards();
};

// Step 5: Edit (prompt update)
window.editStudent = id => {
  const student = students.find(s => s.id === id);
  if (!student) return;
  const newStatus = prompt("Update status (Present/Absent/Late):", student.status);
  if (newStatus) {
    student.status = newStatus;
    renderCards();
  }
};

// Step 6: Search Filters
searchBox.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = students.filter(s => s.name.toLowerCase().includes(query));
  renderCards(filtered);
});

// ---------------- CONTROL STRUCTURES ----------------

// Step 1: If–Else Logic
students.forEach(s => {
  if (s.status === "Present") {
    console.log(`${s.name} is in class`);
  } else if (s.status === "Late") {
    console.log(`${s.name} came late`);
  } else if (s.status === "Absent") {
    console.log(`${s.name} is absent`);
  } else {
    console.log(`${s.name} has unknown status`);
  }
});

// Step 2: For Loop (display names in console)
for (let i = 0; i < students.length; i++) {
  console.log(`For Loop → ${students[i].name} (${students[i].status})`);
}

// Step 3: While Loop (display statuses in console)
let i = 0;
while (i < students.length) {
  console.log(`While Loop → ${students[i].status}`);
  i++;
}

// Step 4: Combine Loops with Conditions
for (let s of students) {
  if (s.status === "Present") {
    console.log(`Loop+Condition → ${s.name} counted in attendance`);
  } else if (s.status === "Late") {
    console.log(`Loop+Condition → ${s.name} marked late`);
  }
}

// ---------------- EXTRA DEMOS ----------------

// ✅ Object CRUD demo (Task 5)
const recordInfo = { id: 5, name: "Test Student", status: "Present" };
recordInfo.department = "Computer Science"; // Create
console.log(`Record Name: ${recordInfo.name}`); // Read
recordInfo.status = "Absent"; // Update
delete recordInfo.department; // Delete

// ✅ String Methods demo (Task 6)
const rawString = "   Attendance Record   ";
console.log(rawString.trim().toUpperCase());   // TRIM + UPPERCASE
console.log(rawString.includes("Record"));     // INCLUDES
console.log(rawString.replace("Record", "Log")); // REPLACE
console.log(rawString.slice(0,10));            // SLICE
console.log(rawString.startsWith("Attendance")); // STARTSWITH
console.log(rawString.endsWith("Record   "));  // ENDSWITH
console.log(rawString.split(" "));             // SPLIT
console.log(rawString.concat(" - Updated"));   // CONCAT
