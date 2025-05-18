document.addEventListener('DOMContentLoaded', () => {
  const toCounter = document.getElementById('to-counter');
  if (toCounter) {
    toCounter.addEventListener('click', () => {
      window.location.href = 'counter.html';
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
    let count = 0;
    counterButton.addEventListener('click', () => {
      count += 1;
      counterButton.textContent = `Counter: ${count}`;
    });
  }
});
