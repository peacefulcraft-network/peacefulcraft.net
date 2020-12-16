import m from 'mithril';

import HoverDropdownList from '@/components/HoverDropdownList/HoverDropdownList.js';
import HambugerNavigationIcon from '@/components/assets/HamburgerNavigationIcon.js';
import LinkElement from '@/components/LinkElement.js';

import '@/css/components/SiteHeader/NavigationDropdown.css';

export default {
	view: () => {
		return m('.navigation-dropdown__root',
			m(HoverDropdownList, {
				previewElement: m('.navigation-dropdown__hover-target', m(HambugerNavigationIcon)),
			}, [
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/' }, 'Home Page'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/about' }, 'About Us'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/staff' }, 'Staffing & Policies'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/gamemode/survival' }, 'Survival Game Mode'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/gamemode/peaceful' }, 'Peaceful Game Mode'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/gamemode/creative' }, 'Creative Plots Mode'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/gamemode/trenchpvp' }, 'TrenchPvP Game Mode'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/gamemode/sco' }, 'Sword Craft Online'),
				m(m.route.Link, { class: 'navigation-dropdown__link', href: '/gamemode/minigames' }, 'Minigames Game Modes'),
				m(LinkElement, { class: 'navigation-dropdown__link', href: 'https://www.instagram.com/peacefulcraftnetwork/' }, 'Instagram'),
				m(LinkElement, { class: 'navigation-dropdown__link', href: 'https://twitter.com/PeaceCFNT' }, 'Twitter'),
				m(LinkElement, { class: 'navigation-dropdown__link', href: 'https://www.twitch.tv/peacefulcraftnt' }, 'Twitch'),
			]),
		);
	},
};