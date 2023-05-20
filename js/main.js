let modeSwicher = document.getElementById('modeSwicher');
modeSwicher.onclick = function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeSwicher.classList.replace('fa-moon', 'fa-sun');
  } else {
    modeSwicher.classList.replace('fa-sun', 'fa-moon');
  }
};
