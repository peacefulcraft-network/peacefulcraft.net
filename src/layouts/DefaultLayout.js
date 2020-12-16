import m from 'mithril';

import Header from '@/components/SiteHeader/SiteHeader.js';

/**
 * Default page layout - contains page header on top
 */
export default {
	view: (vnode) => {
		return [
			m(Header),
			vnode.children,
		];
	},
};