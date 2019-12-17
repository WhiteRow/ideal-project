function AdaptiveMenu(options) {
	const Privates = {};

	this.showMenu = () => {
		Privates.elements.menu.classList.toggle(
			Privates.options.menu_active_class
		);
		Privates.elements.button.classList.toggle(
			Privates.options.button_active_class
		);
	};

	Privates.options = options;
	Privates.elements = {
		menu: document.querySelector(Privates.options.menu),
		button: document.querySelector(Privates.options.button)
	};

	Privates.elements.button.addEventListener('click', this.showMenu);
}

export default AdaptiveMenu;
