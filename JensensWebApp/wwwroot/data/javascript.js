

document.getElementById('darkModeBtn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.getElementById('navbar').classList.toggle('dark-mode');
});

function displayCurrentDate() {
    var currentDate = new Date();
    var dateBox = document.getElementById('date-box');
    dateBox.textContent = currentDate.toDateString();
}