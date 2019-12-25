function FixedHeader(options) {
	const Elements = {};

	this._letsFix = () => {
		const header = Elements.call.header;

		if (pageYOffset > 100) {
			header.classList.add('is-scrolled');
		} else {
			header.classList.remove('is-scrolled');
		}
	};

	this._init = () => {
		window.addEventListener('scroll', this._letsFix);
	};

	Elements.call = {
		header: options.header,
	};

	return this._init();
}

export default FixedHeader;
