import m from 'mithril';

export default {
  view: (vnode) => {
    if (vnode.attrs.href.indexOf('http') === 0) {
      return m('a', {
        href: vnode.attrs.href,
        rel: 'noopener',
        target: (vnode.attrs.newTab)? '_blank' : '_self'
      }, vnode.children);
    } else {
      return m(m.route.Link, { href: vnode.attrs.href }, vnode.children);
    }
  }
};
