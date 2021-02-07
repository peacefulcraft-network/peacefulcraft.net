import m from 'mithril';

import '@/css/components/inputs/FieldLabel.css';

export default class FieldLabel {
	view(vnode) {
		return m('label.field_label', {
			for: vnode.attrs.for
		}, vnode.attrs.text);
	}
}
