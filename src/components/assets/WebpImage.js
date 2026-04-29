import m from 'mithril';

import { toWebpAssetPath } from '@/utils/imageFormat';

export default {
	view: (vnode) => {
		const {
			src,
			alt = '',
			...imgAttrs
		} = vnode.attrs;

		const webpSrc = toWebpAssetPath(src);
		if (webpSrc === src) {
			return m('img', { ...imgAttrs, src, alt });
		}

		return m('picture', [
			m('source', {
				srcset: webpSrc,
				type: 'image/webp',
			}),
			m('img', { ...imgAttrs, src, alt }),
		]);
	},
};
