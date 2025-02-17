
const scanButton = document.getElementById("scan-button");
const infoSection = document.getElementById("info-section");
const medicationName = document.getElementById("medication-name");
const purposeButton.addEventListener("click", () => {
  // simulate scanning a medication
  const medication = {
    name: "Ibuprofen",
    purpose = document.getElementById("purpose");
const dosage = document.getElementById("dosage");
const sideEffects = document.getElementById("side-effects");
const interactions = document.getElementById("interactions");

scanButton.addEventListener("click", () => {
  //: "Pain relief simulate scanning a",
    dos medication
  const medication = {
    name: "Ibuprofen",
    purpose: "Pain relief",
    dosage: "200mg every 4-6 hours",
    sideEffects: "Stomach pain, heartburn, nausea, diarrhea",
    interactions: "May interact with blood thinners, ACE inhibitors, and other medications"
  };

  medicationName.textContent = medication.name;
  purpose.textContent = medication.purpose;
  dosage.textContent = medication.dosage;
  sideEffects.textContent = medicationage: "200mg every 4-6 hours",
    sideEffects: "Stomach pain, heartburn, nausea, diarrhea, constipation, dizziness, headache, nervousness",
    interactions: "May interact with blood thinners, ACE inhibitors, and other medications"
  };

  // display the medication information
  medicationName.textContent = medication.name;
  purpose.textContent = medication.purpose;
  dosage.textContent = medication.dosage;
  sideEffects.textContent = medication.sideEffects;
  interactions.textContent = medication.interactions;

  // show the information section
  infoSection.hidden = false;
});

// js

const uploadForm = document.getElementById('uploadForm');
const imageDetailsDiv = document.getElementById('imageDetails');

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    try {
        const response = await fetch('/upload-image', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        displayImageDetails(data);
    } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again later.");
    }
});

function displayImageDetails(data) {
    imageDetailsDiv.innerHTML = `
        <h2>Image Details</h2>
        <p>Format: ${data.format}</p>
        <p>Width: ${data.width}</p>
        <p>Height: ${data.height}</p>
    `;
}