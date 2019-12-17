/**
 * Styles files
 */
import '../styles/home.scss';

/**
 * Config files
 */
import './config/images-import';
import './config/fonts-import';

/**
 * Components files
 */
import FixedHeader from './components/fixed-header';
import AdaptiveMenu from './components/adaptive-menu';

function Home() {
	new AdaptiveMenu({
		menu: '.i-header-menu',
		button: '.mobile-menu-button',
		menu_active_class: 'is-menu-visible',
		button_active_class: 'is-adaptive-menu-active'
	});

	new FixedHeader();
}

document.addEventListener('DOMContentLoaded', Home());
