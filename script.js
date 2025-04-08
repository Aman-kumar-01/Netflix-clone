
const scrollContainer = document.getElementById('scrollContainer');
const leftBtn = document.querySelector('.slide-btn.left');
const rightBtn = document.querySelector('.slide-btn.right');

leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -220, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 220, behavior: 'smooth' });
});

