import m from 'mithril';

import '@/css/components/HoverDropdownList/HoverDropdownList.css';

export default {
  view: (vnode) => {
    return m('.dropdown-list',
      m('.dropdown-list__content', [
        m('.dropdown-list__preview', vnode.attrs.previewElement),
        m('ul.dropdown-list__dropdown', vnode.children.map(
          (c) =>  m('li.dropdown-list__dropdown-item', c)
        )),
      ])
    );
  },
};