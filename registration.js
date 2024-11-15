document.getElementById('registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const userId = document.getElementById('user-id').value;
    const userType = document.getElementById('user-type').value;
    const vehicleType = document.getElementById('vehicle-type').value;

    // Validate input (check if fields are empty)
    if (!userId || !userType || !vehicleType) {
        alert("All fields must be filled out.");
        return;
    }

    // Simulate slot allocation
    const parkingSlot = allocateParkingSlot(vehicleType);

    // Check if a parking slot was successfully allocated
    if (parkingSlot === "No slots available") {
        alert("Sorry, no parking slots available for your vehicle type.");
    } else {
        alert(`Registration successful! Your parking slot is: ${parkingSlot}`);
        // Store user details in localStorage
        localStorage.setItem('userId', userId);
        localStorage.setItem('userType', userType);
        localStorage.setItem('vehicleType', vehicleType);
    }
});

function allocateParkingSlot(vehicleType) {
    // Simulate available parking slots (this can be expanded with a dynamic allocation system)
    const parkingSlots = {
        "two-wheeler": 15, // 15 slots for two-wheelers
        "car": 10 // 10 slots for cars
    };

    // Check if the slot is available for the vehicle type
    if (vehicleType === "two-wheeler" && parkingSlots["two-wheeler"] > 0) {
        parkingSlots["two-wheeler"]--;
        return "Lot 1 (Two-Wheeler)";
    } else if (vehicleType === "car" && parkingSlots["car"] > 0) {
        parkingSlots["car"]--;
        return "Lot 2 (Car)";
    } else {
        return "No slots available";
    }
}
