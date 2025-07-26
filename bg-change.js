const images = [
  'img/galaxy1.jpg',
  'img/galaxy2.jpg',
  'img/galaxy3.jpg',
  'img/galaxy4.jpg'
];

let index = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

// Initial background
changeBackground();

// Change every 10 seconds (10000 milliseconds)
setInterval(changeBackground, 10000);
