import m from 'mithril';

import PCNLogo from '@/assets/images/PCNLogo.png';
import WebpImage from '@/components/assets/WebpImage';

export default {
  view: (vnode) => m(WebpImage, {
    src: PCNLogo,
    alt: 'PeacefulCraft Network Logo',
    id: vnode.attrs.id,
    style: (vnode.state.center)? 'margin: auto;' : '',
  }),
};