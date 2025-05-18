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

  const adminButton = document.getElementById('admin-button');
  if (adminButton) {
    adminButton.addEventListener('click', () => {
      window.location.href = 'login.html';
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

  const loginButton = document.getElementById('enter-button');
  if (loginButton) {
    if (localStorage.getItem('loggedIn') === 'true') {
      window.location.href = 'admin.html';
      return;
    }
    loginButton.addEventListener('click', () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === 'Admin' && password === '12345') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'admin.html';
      }
    });
  }

  const adminPanel = document.getElementById('admin-panel');
  if (adminPanel) {
    if (localStorage.getItem('loggedIn') !== 'true') {
      window.location.href = 'login.html';
    }
  }

  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('loggedIn');
      window.location.href = 'index.html';
    });
  }
});
