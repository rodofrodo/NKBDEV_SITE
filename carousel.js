const carousel = document.getElementById("carousel");
const images = Array.from(carousel.querySelectorAll("img"));
let currentIndex = 2; // Start with 3rd image in center

function updateCarousel() {
    const imageWidth = images[0].offsetWidth + 20; // 20 = margin
    const offset = -(currentIndex * imageWidth - (carousel.parentElement.offsetWidth / 2 - imageWidth / 2));
    carousel.style.transform = `translateX(${offset}px)`;

    images.forEach((img, idx) => {
        img.className = ''; // reset
        if (idx === currentIndex) {
            img.classList.add('active');
        } else if (Math.abs(idx - currentIndex) === 1) {
            img.classList.add('side-1');
        } else if (Math.abs(idx - currentIndex) === 2) {
            img.classList.add('side-2');
        }
    });
}

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = Math.min(images.length - 1, currentIndex + 1);
    updateCarousel();
});

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);