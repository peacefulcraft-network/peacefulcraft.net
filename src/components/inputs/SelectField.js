import m from 'mithril';

import '@/css/components/inputs/SelectField.css';

export default class SelectField {
	view(vnode) {
		let opts = [];
		if (vnode.attrs.opts instanceof Array) {
			opts = vnode.attrs.opts.map((opt) => {
				return m('option', opt);
			});
		} else {
			opts = Object.keys(vnode.attrs.opts).map((optk) => {
				return m('option', { value: vnode.attrs.opts[optk] }, optk);
			});
		}

		return m('select', {
			class: 'select-field',
			onchange: vnode.attrs.onchange,
			value: vnode.attrs.value,
		}, opts);
	}
}