import m from 'mithril';

import Aincrad from '@/assets/images/SCO/Aincrad.png';
import PCNLogo from '@/assets/images/PCNLogo.png';
import NavigationDropdown from '@/components/SiteHeader/NavigationDropdown.js';

import '@/css/pages/SwordCraftOnlinePage.css';

export default {
	view: () => {
		return m('#sco', [
			m('.header', [
				m(NavigationDropdown),
				m('img.pcn_logo', {
					src: PCNLogo,
					onclick: () => m.route.set('/')
				})
			]),
			m('img.background', { src: Aincrad }),
			m('.gradient_olverlay'),
			m('.announcement_wrapper', [
				m('h1.title', 'Sword Craft Online'),
				m('h3.soon', 'Coming Fall 2020')
			]),
		]);
	},
};
