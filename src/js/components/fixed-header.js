function FixedHeader() {
	this._test = () => {
		const header = document.querySelector('.l-header');

		if (pageYOffset > 100) {
			header.classList.add('is-scrolled');
		} else {
			header.classList.remove('is-scrolled');
		}
	};

	this._init = () => {
		window.addEventListener('scroll', this._test);
	};

	return this._init();
}

export default FixedHeader;
