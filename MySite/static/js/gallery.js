const hamburger = document.querySelector('#hamburger');
const dropDown = document.querySelector('.drop-down');

document.addEventListener('click', function (e) {
    let isClickInsideDropdown = hamburger.contains(e.target);
    if (dropDown.style.display === "flex" && !isClickInsideDropdown) {
        dropDown.style.display = "none";
    }
})