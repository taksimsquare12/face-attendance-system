// src/pages/database/record.js
import { students } from "./student.js";

// DOM element jahan cards render honge
const recordContainer = document.getElementById("record-container");

// Render function
export const renderRecords = () => {
  recordContainer.innerHTML = "";
  students.map(student => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded p-4 m-2";
    card.innerHTML = `
      <h3 class="text-lg font-bold">${student.name}</h3>
      <p>Status: ${student.status}</p>
      <p>Time: ${student.time}</p>
      <button class="bg-blue-500 text-white px-2 py-1 m-1" onclick="editRecord(${student.id})">Edit</button>
      <button class="bg-red-500 text-white px-2 py-1 m-1" onclick="deleteRecord(${student.id})">Delete</button>
    `;
    recordContainer.appendChild(card);
  });
};

// Create
export const addRecord = (name, status, time) => {
  const newId = students.length ? students[students.length - 1].id + 1 : 1;
  students.push({ id: newId, name, status, time });
  renderRecords();
};

// Update
window.editRecord = (id) => {
  const student = students.find(s => s.id === id);
  const newStatus = prompt("Enter new status:", student.status);
  if (newStatus) {
    student.status = newStatus;
    renderRecords();
  }
};

// Delete
window.deleteRecord = (id) => {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    renderRecords();
  }
};

// Initial render
renderRecords();
