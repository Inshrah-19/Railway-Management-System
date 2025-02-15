document.addEventListener('DOMContentLoaded', function() {
    // Dynamic train options based on selected route
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const trainSelect = document.getElementById('train');
  
    const routes = {
      'Karachi-Lahore': ['Tezgam', 'Karakoram Express', 'Pakistan Express'],
      'Lahore-Karachi': ['Green Line', 'Khyber Mail', 'Allama Iqbal Express'],
      'Karachi-Peshawar': ['Awam Express', 'Rehman Baba Express'],
      'Peshawar-Karachi': ['Khyber Mail', 'Awam Express']
    };
  
    function updateTrains() {
      const from = fromSelect.value;
      const to = toSelect.value;
      const route = `${from}-${to}`;
  
      trainSelect.innerHTML = '<option value="">Select Train</option>';
  
      if (routes[route]) {
        routes[route].forEach(train => {
          const option = document.createElement('option');
          option.value = train;
          option.textContent = train;
          trainSelect.appendChild(option);
        });
      }
    }
  
    if (fromSelect && toSelect && trainSelect) {
      fromSelect.addEventListener('change', updateTrains);
      toSelect.addEventListener('change', updateTrains);
    }
  
    // Booking form submission
    const bookingForm = document.getElementById('ticket-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(bookingForm);
        let message = 'Booking Confirmed!\n\n';
        for (let [key, value] of formData.entries()) {
          message += `${key}: ${value}\n`;
        }
        alert(message);
      });
    }
  
    // Live train status update (simulated)
    const statusTable = document.getElementById('train-status');
    if (statusTable) {
      setInterval(() => {
        const rows = statusTable.getElementsByTagName('tr');
        for (let i = 1; i < rows.length; i++) {
          const statusCell = rows[i].cells[3];
          const random = Math.random();
          if (random < 0.7) {
            statusCell.textContent = 'On Time';
            statusCell.style.color = 'green';
          } else if (random < 0.9) {
            statusCell.textContent = 'Delayed';
            statusCell.style.color = 'orange';
          } else {
            statusCell.textContent = 'Cancelled';
            statusCell.style.color = 'red';
          }
        }
      }, 5000); // Update every 5 seconds
    }
  });