document.addEventListener('DOMContentLoaded', function() {
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.navigation').classList.toggle('show');
});

// Закрывать меню при клике на ссылку внутри него
document.querySelectorAll('.navigation a').forEach(function(element) {
  element.addEventListener('click', function() {
    document.querySelector('.navigation').classList.remove('show');
  });
});
});