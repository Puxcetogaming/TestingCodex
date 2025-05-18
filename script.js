document.addEventListener('DOMContentLoaded', () => {
  const toCounter = document.getElementById('to-counter');
  if (toCounter) {
    toCounter.addEventListener('click', () => {
      window.location.href = 'counter.html';
    });
  }


  const toTimer = document.getElementById('to-timer');
  if (toTimer) {
    toTimer.addEventListener('click', () => {
      window.location.href = 'timer.html';
    });
  }


  const backButton = document.getElementById('back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  const counterButton = document.getElementById('counter-button');
  if (counterButton) {
    let count = parseInt(localStorage.getItem('counterValue'), 10) || 0;
    counterButton.textContent = `Counter: ${count}`;
    counterButton.addEventListener('click', () => {
      count += 1;
      counterButton.textContent = `Counter: ${count}`;
      localStorage.setItem('counterValue', count);
    });
  }

  const timerDisplay = document.getElementById('timer-display');
  if (timerDisplay) {
    let start = parseInt(localStorage.getItem('timerStart'), 10);
    if (!start) {
      start = Date.now();
      localStorage.setItem('timerStart', start);
    }

    function updateTimer() {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      timerDisplay.textContent = `Timer: ${elapsed}s`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }
    let count = 0;
    counterButton.addEventListener('click', () => {
      count += 1;
      counterButton.textContent = `Counter: ${count}`;
    });
  }
});
