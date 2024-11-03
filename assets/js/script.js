
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
let timeLeft = 180; // 3 minutes in seconds
let timerId;

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

function resendOTP() {
    // Here you would typically call your backend to resend the OTP
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

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
        }
        if (e.target.value.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value) {
            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
        if (e.key === 'e') {
            e.preventDefault();
        }
    });
});


// otp