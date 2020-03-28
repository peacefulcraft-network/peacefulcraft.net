import m from 'mithril';

import LinkElement from '@/components/LinkElement';

export default  {
  view: (vnode) => {
    return m('div.grid_image_cell', { style: vnode.attrs.img },
      m(LinkElement, { href: vnode.attrs.href, newTab: vnode.attrs.newTab }, [
        m('div.grid_image_info', [
          m('div.grid_image_info_title', vnode.attrs.title),
          m('div.grid_image_info_desc', vnode.attrs.desc)
        ]),
      ]),
    );
  },
};
