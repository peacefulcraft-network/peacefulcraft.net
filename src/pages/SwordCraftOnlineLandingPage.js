import m from 'mithril';

import Aincrad from '@/assets/images/SCO/Aincrad.png';
import PCNLogo from '@/assets/images/PCNLogo.png';
import WebpImage from '@/components/assets/WebpImage';
import NavigationDropdown from '@/components/SiteHeader/NavigationDropdown.js';

import '@/css/pages/SwordCraftOnlinePage.css';

export default {
	view: () => {
		return m('#sco', [
			m('.header', [
				m(NavigationDropdown),
				m(WebpImage, {
					class: 'pcn_logo',
					src: PCNLogo,
					alt: 'PeacefulCraft Network logo',
					onclick: () => m.route.set('/')
				})
			]),
			m(WebpImage, {
				class: 'background',
				src: Aincrad,
				alt: 'Aincrad castle background',
			}),
			m('.gradient_olverlay'),
			m('.announcement_wrapper', [
				m('h1.title', 'Sword Craft Online'),
			]),
		]);
	},
};
