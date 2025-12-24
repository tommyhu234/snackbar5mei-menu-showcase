const items = document.querySelectorAll('.carousel-item');
let current = 0;
const intervalTime = 15 * 1000; // seconds per item

function showNextItem() {
  const oldItem = items[current];
  oldItem.classList.remove("fly-in", "fly-out", "active");
  oldItem.classList.add('fly-out');
  oldItem.style.opacity = "1";
  current = (current + 1) % items.length;
  const newItem = items[current];
  newItem.classList.add('active');
  newItem.classList.add('fly-in');
  newItem.classList.remove('fly-out');
}

setInterval(showNextItem, intervalTime);