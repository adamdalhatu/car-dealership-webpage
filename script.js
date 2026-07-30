// STRING: Text value
const dealershipName = "Vroom Vroom Motors"; 

// NUMBER: Numerical value
let minDriverAge = 18; 

// BOOLEAN: True or False value
let isOpen = true; 


// ARRAY: List of available test drive time slots
const availableTimes = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

// OBJECT: Detailed car profile
const featuredCar = {
    brand: "Lightning",
    model: "Sports Coupe",
    pricePerDay: 150,
    isAvailable: true
};


console.log("--- Available Booking Times ---");
for (let i = 0; i < availableTimes.length; i++) {
    console.log("Slot " + (i + 1) + ": " + availableTimes[i]);
}


// Function triggered when the form is submitted
function handleBookingSubmission(event) {
    // Prevent default form submission page reload
    event.preventDefault();

    // Fetch user inputs from the HTML form
    const fullName = document.getElementById("fullName").value;
    const userAgeInput = document.getElementById("userAge").value;

    // Convert input string to a Number type
    const age = Number(userAgeInput);

    // COMPARISON LOGIC
    if (age < minDriverAge) {
        // Condition failed
        alert("Booking Failed: You must be at least " + minDriverAge + " years old to drive.");
        return; // Exit function early
    }

    // If comparison succeeds: update UI elements dynamically
    const formElement = document.getElementById("bookingForm");
    const confirmationBox = document.getElementById("confirmationMessage");
    const summaryText = document.getElementById("summaryDetails");

    // Hide the form and reveal confirmation container
    formElement.style.display = "none";
    confirmationBox.style.display = "block";

    // Inject custom text using variables & object properties
    summaryText.innerHTML = "Driver: <strong>" + fullName + "</strong> (" + age + " y/o)<br>" +
                           "Vehicle: <strong>" + featuredCar.brand + " " + featuredCar.model + "</strong><br>" +
                           "Status: Confirmed";
}