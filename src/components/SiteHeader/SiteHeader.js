import m from 'mithril';

import NavigationDropdown from '@/components/SiteHeader/NavigationDropdown.js';
import PCNLogo from '@/components/assets/PCNLogo';

import '@/css/components/SiteHeader/SiteHeader.css';

export default {
	view: () => {
		return m('div#site-header', [
			m('div', { class: 'site-header__content'}, [
				m(NavigationDropdown),
				m('h3', { class: 'site-header__title' }, m(m.route.Link, { href: '/' }, 'PeacefulCraft Network')),
				m(m.route.Link, { href: '/' }, m('.site-header__logo-wrapper', m(PCNLogo))),
			])  
		]);
	},
};