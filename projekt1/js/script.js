function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}

function resetRangeInput() {
    var rangeInput = document.querySelector('input[type="range"]');
    rangeInput.value = 5;
    rangeValue.innerText = rangeInput.value;
}
