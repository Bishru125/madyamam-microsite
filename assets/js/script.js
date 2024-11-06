
// header
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// header

// countdown

function updateCountdown() {
    const targetDate = new Date("2024-11-29T00:00:00");
    const now = new Date();
    const timeDifference = targetDate - now;
  
    if (timeDifference <= 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
    }
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
  }
  
  setInterval(updateCountdown, 1000);
  

// media house




// loader

window.addEventListener("load", function() {
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("content").style.display = "block";
});

// loader



// otp

const inputs = document.querySelectorAll('.otp-input input');
const timerDisplay = document.getElementById('timer');
const resendButton = document.getElementById('resendButton');
let timeLeft = 180;
let timerId;

// Start Timer function
function startTimer() {
    timerId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerDisplay.textContent = "Code expired";
            resendButton.disabled = false;
            inputs.forEach(input => input.disabled = true);
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
            timeLeft--;
        }
    }, 1000);
}

// Resend OTP function
function resendOTP() {
    alert("New OTP sent!");
    timeLeft = 180;
    inputs.forEach(input => {
        input.value = '';
        input.disabled = false;
    });
    resendButton.disabled = true;
    inputs[0].focus();
    clearInterval(timerId);
    startTimer();
}

// Adjusted input handling
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Only allow one character
        e.target.value = e.target.value.slice(0, 1);

        // Automatically move to next input if there's a value
        if (e.target.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputs[index - 1].focus();
        }

        // Prevent typing of 'e' to avoid exponential input in some browsers
        if (e.key === 'e' || e.key === 'E') {
            e.preventDefault();
        }
    });
});


// otp




// collaps

// Toggle collapse on #success button click
document.querySelector('#success').addEventListener('click', function(event) {
    const collapseContent = document.querySelector('#collapseTickets');
    const isCollapsed = collapseContent.style.display === 'none' || !collapseContent.style.display;
  
    // Toggle visibility of the collapsible content
    if (isCollapsed) {
      collapseContent.style.display = 'block';
      this.classList.add('active'); // Add active class to button
    } else {
      collapseContent.style.display = 'none';
      this.classList.remove('active'); // Remove active class to button
    }
  
    // Prevent click event from propagating to document
    event.stopPropagation();
  });
  
  // Close collapseTickets when clicking outside of it
  document.addEventListener('click', function(event) {
    const collapseContent = document.querySelector('#collapseTickets');
    const successButton = document.querySelector('#success');
  
    // Check if the click is outside of collapseContent and successButton
    if (!collapseContent.contains(event.target) && !successButton.contains(event.target)) {
      collapseContent.style.display = 'none';
      successButton.classList.remove('active'); // Remove active class from button
    }
  });

// collaps