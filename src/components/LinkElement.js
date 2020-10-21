import m from 'mithril';

/**
 * Base link element.
 * Autodetects same-site m.route.Links vs external links
 */
export default {
  view: (vnode) => {
    if (vnode.attrs.href !== undefined && vnode.attrs.href.indexOf('http') === 0) {
      return m('a', {
        style: 'text-decoration: none; color: inherit;',
        href: vnode.attrs.href,
        rel: 'noopener',
        target: (vnode.attrs.newTab)? '_blank' : '_self'
      }, vnode.children);
    } else if(vnode.attrs.href !== undefined && vnode.attrs.href.indexOf('mailto:') == 0) {
      return m('a', {
        style: 'text-decoration: none; color: inherit;',
        href: vnode.attrs.href,
      }, vnode.children);
    } else {
      return m(m.route.Link, {
        style: 'text-decoration: none; color: inherit;',
        href: vnode.attrs.href
      }, vnode.children);
    }
  }
};
