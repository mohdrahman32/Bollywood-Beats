// script.js
const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach(container => {
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollBy({
      left: e.deltaY < 0 ? -100 : 100,
      behavior: 'smooth'
    });
  });
});
