/**
 * Styles files
 */
import '../styles/home.scss';

/**
 * Config files
 */
import './config/images-import';

/**
 * Components files
 */
import FixedHeader from './components/fixed-header';
import AdaptiveMenu from './components/adaptive-menu';

function Home() {
	const Header = document.querySelector('.js-fixed-header');
	
	new AdaptiveMenu({
		menu: '.js-header-menu',
		button: '.js-mobile-menu-button',
		menu_active_class: 'is-menu-visible',
		button_active_class: 'is-adaptive-menu-active'
	});

	new FixedHeader({
		header: Header,
	});
}

document.addEventListener('DOMContentLoaded', Home());
