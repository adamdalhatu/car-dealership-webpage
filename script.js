const formElement = document.getElementById("bookingForm");
const confirmationBox = document.getElementById("confirmationMessage");
const summaryText = document.getElementById("summaryDetails");


function handleBookingSubmission(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const userAgeInput = document.getElementById("userAge").value;

    const minDriverAge = 18;
    const age = Number(userAgeInput);

    if (age < minDriverAge) {
        alert("Booking Failed: You must be at least " + minDriverAge + " years old to drive.");
        return;
    }

    formElement.style.display = "none";
    confirmationBox.style.display = "block";

    summaryText.innerHTML = "Driver: <strong>" + fullName + "</strong> (" + age + " y/o)<br>" +
                           "Status: Booking Confirmed!";
}

formElement.addEventListener("submit", handleBookingSubmission);