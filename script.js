// Common script for navigation and page-specific logic

function createMenu() {
  const hamburger = document.createElement('button');
  hamburger.id = 'hamburger';
  hamburger.innerHTML = '\u2630';
  document.body.appendChild(hamburger);

  const dropdown = document.createElement('div');
  dropdown.id = 'menu-dropdown';
  document.body.appendChild(dropdown);

  function addLink(text, href) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', () => {
      window.location.href = href;
    });
    dropdown.appendChild(btn);
  }

  addLink('Landing Page', 'index.html');
  addLink('Counter Page', 'counter.html');
  addLink('Timer Page', 'timer.html');

  if (localStorage.getItem('loggedIn') === 'true') {
    addLink('Admin Panel', 'admin.html');
    const logout = document.createElement('button');
    logout.textContent = 'Logout';
    logout.addEventListener('click', () => {
      localStorage.removeItem('loggedIn');
      window.location.href = 'index.html';
    });
    dropdown.appendChild(logout);
  } else {
    addLink('Login', 'login.html');
  }

  function closeMenu(e) {
    if (e && (dropdown.contains(e.target) || e.target === hamburger)) {
      return;
    }
    dropdown.classList.remove('show');
    document.removeEventListener('click', closeMenu);
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createMenu();

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
});
