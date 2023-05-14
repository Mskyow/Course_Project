document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.button');

	buttons.forEach(button => {
		button.addEventListener('mouseover', function() {
			this.classList.add('hovered'); // Добавление класса при наведении
		});
	
		button.addEventListener('mouseout', function() {
			this.classList.remove('hovered'); // Удаление класса при уходе курсора
		});
	});
});