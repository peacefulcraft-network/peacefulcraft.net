import m from 'mithril';

import HamburgerNavigationIcon from '@/assets/icons/HamburgerNavigation.svg';

import '@/css/components/HoverDropdownList/HamburgerNavigationIcon.css';

export default {
  view: () => {
    return m('img.hamburger-navigation-icon', { src: HamburgerNavigationIcon });
  },
};