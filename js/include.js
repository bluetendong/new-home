// js/include.js
function loadMenu() {
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu-placeholder').innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', loadMenu);
