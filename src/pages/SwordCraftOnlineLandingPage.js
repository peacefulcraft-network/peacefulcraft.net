import m from 'mithril';

import PCNLogo from '@/assets/images/PCNLogo.png';
import Aincrad from '@/assets/images/SCO/Aincrad.png';

import '@/css/pages/SwordCraftOnlinePage.css';

export default {
  view: (vnode) => {
    return m('#sco', [
      m('.header', [
        m('img.pcn_logo', {
          src: PCNLogo,
          onclick: () => m.route.set('/')
        })
      ]),
      m('img.background', { src: Aincrad }),
      m('.gradient_olverlay'),
      m('.announcement_wrapper', [
        m('h1.title', 'Sword Craft Online'),
        m('h3.soon', 'Coming Summer 2020')
      ]),
    ]);
  },
};