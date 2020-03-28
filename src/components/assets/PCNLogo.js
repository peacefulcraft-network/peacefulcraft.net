import m from 'mithril';

import PCNLogo from '@/assets/images/PCNLogo.png';

export default {
  view: (vnode) => m('img', {
    src: PCNLogo,
    alt: 'PeacefulCraft Network Logo',
    id: vnode.attrs.id,
    style: (vnode.state.center)? 'margin: auto;' : '',
  }),
};