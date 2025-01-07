
function imgSlider(imagePath) {
    document.querySelector(".starbucks").src = imagePath;
}

function changeCircleColor(color) {
    document.querySelector(".circle").style.backgroundColor = color;
}
function toggleMenu() {
    const menu = document.querySelector('header ul');
    menu.classList.toggle('open');
}
