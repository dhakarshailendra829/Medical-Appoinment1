// Create an object to store the patient's information
const patient = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
  };
  
  // Create a function to validate the patient's information
  function validatePatientInfo() {
    if (!patient.name || !patient.email || !patient.phone || !patient.date || !patient.time || !patient.doctor) {
      return false;
    }
    return true;
  }
  
  // Create a function to book the appointment
  async function bookAppointment() {
    // Validate the patient's information
    if (!validatePatientInfo()) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Send the patient's information to the backend
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    });
  
    // Check if the appointment was booked successfully
    if (response.status === 200) {
      alert("Your appointment has been booked successfully!");
    } else {
      alert("An error occurred while booking your appointment. Please try again later.");
    }
  }
  
  // Add an event listener to the "Book Appointment" button
  const bookAppointmentButton = document.querySelector("#book-appointment-button");
  bookAppointmentButton.addEventListener("click", bookAppointment);