import m from 'mithril';

import LinkElement from '@/components/LinkElement';

/**
 * Link element that styles font lite-blue for emphasis
 */
export default {
	view: (vnode) => {
		return m('span', { style: 'color:#42BDDC;', },
			m(LinkElement, {
				href: vnode.attrs.href,
				newTab: vnode.attrs.newTab 
			}, vnode.children)
		);
	},
};