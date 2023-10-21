const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('count');
const clickSound = document.getElementById('clickSound');

let count = 0;

clickButton.addEventListener('click', () => {
  count++;

  clickCount.textContent = count;
  clickSound.currentTime = 0;
  clickSound.play();
});