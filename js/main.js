const menuBurger = document.querySelector('.header__menu-burger');
const comMenu = document.querySelector('.header__menu');

menuBurger.addEventListener('click', () => {
	menuBurger.classList.toggle('active');
	comMenu.classList.toggle('active');
})