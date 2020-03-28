import m from 'mithril';

import GridImageCell from './GridImageCell';

import '@/css/components/GridImageModal.css';

export default {
  view: (vnode) => {
    return m('div.grid_image_modal', vnode.attrs.images.map((mod) => {
      return m(GridImageCell, {
        img: mod.img,
        alt: mod.alt,
        title: mod.title,
        desc: mod.desc,
        href: mod.href,
        newTab: mod.newTab,
      });
    }));
  },
};