function toggleMenu() {
    document.getElementById('navbar').classList.toggle('active');
    document.getElementById('hamburger-btn').classList.toggle('active');
}

document.getElementById('hamburger-btn').addEventListener('click', toggleMenu);
document.getElementById('home-btn').addEventListener('click', toggleMenu);
document.getElementById('products-btn').addEventListener('click', toggleMenu);
document.getElementById('archives-btn').addEventListener('click', toggleMenu);
document.getElementById('gallery-btn').addEventListener('click', toggleMenu);
document.getElementById('about-btn').addEventListener('click', toggleMenu);
