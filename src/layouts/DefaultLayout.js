import m from 'mithril';

import Header from '@/components/SiteHeader';
import PCNLogo from '@/components/assets/PCNLogo';

/**
 * Default page layout - contains page header on top
 */
export default {
  view: (vnode) => {
    return [
      m(Header,
        m('div', { id: 'site_header_content'}, [
          m(m.route.Link, { href: '/' }, m(PCNLogo, { id: 'site_header_logo' })),
          m(m.route.Link, { class: 'site_header_link', href: '/about' }, 'About Us'),
          m('h3', { id: 'site_header_title' }, m(m.route.Link, { href: '/' }, 'PeacefulCraft Network')),
        ])  
      ),
      vnode.children,
    ];
  },
};