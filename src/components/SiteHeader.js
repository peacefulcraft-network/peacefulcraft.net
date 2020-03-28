import m from 'mithril';

import '@/css/components/SiteHeader.css';

export default {
  view: (vnode) => m('div#site_header', vnode.children),
};