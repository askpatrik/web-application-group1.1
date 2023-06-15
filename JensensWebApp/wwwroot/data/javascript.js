

    document.getElementById('darkModeBtn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.getElementById('navbar').classList.toggle('dark-mode');

    var navLinks = document.getElementsByClassName('nav-link');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('nav-link-dark');
    }
});

function displayCurrentDate() {
    var currentDate = new Date();
    var dateBox = document.getElementById('date-box');
    dateBox.textContent = currentDate.toDateString();
}