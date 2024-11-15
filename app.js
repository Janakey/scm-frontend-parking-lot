// Registration form handler
document.getElementById('registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('user-id').value;
    const userType = document.getElementById('user-type').value;
    const vehicleType = document.getElementById('vehicle-type').value;
    
    alert(`${userId} registered as ${userType} with ${vehicleType}`);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userType', userType);
    localStorage.setItem('vehicleType', vehicleType);
  });
  
  // Parking status simulation
  document.getElementById('status')?.addEventListener('DOMContentLoaded', function() {
    const parkingSlots = {
      lot1: 'Available',
      lot2: 'Available',
      lot3: 'Available',
    };
    document.getElementById('lot1-status').innerText = parkingSlots.lot1;
    document.getElementById('lot2-status').innerText = parkingSlots.lot2;
    document.getElementById('lot3-status').innerText = parkingSlots.lot3;
  });
  