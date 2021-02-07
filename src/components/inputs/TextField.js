import m from 'mithril';

import FieldLabel from '@/components/inputs/FieldLabel.js';

import '@/css/components/inputs/TextField.css';

/**
 * A basic input field for text and passwords
 * @param type The input type. Defaults to text
 * @param label The field label
 * @param value A mithril/stream object to hold the field value
 * @param onEnter Optional onEnterKeyPress function to call
 * @param attrs Raw attribute values to be passed to generated element. (IE; aria fields that don't have shorthands)
 */
export default class TextField {
	handleEnter(e, onEnter) {
		if (onEnter === undefined) { return; }
		if (e.keyCode === 13) { onEnter(); }
	}

	view(vnode) {
		const tag = (vnode.attrs.type === undefined) ? 'input[type="text"]' : `input[type=${vnode.attrs.type}]`;
		const customAttrs = (vnode.attrs.attrs === undefined || vnode.attrs.attrs === null)? {} : vnode.attrs.attrs;

		return m('', [
			m(FieldLabel, {
				for: vnode.attrs.label,
				text: vnode.attrs.label,
			}),

			m('span.input-field-errormsg', 
				(vnode.attrs.error == null) ? '' : vnode.attrs.error
			),

			m('br'),

			m(`${tag}.input-field`, {
				id: vnode.attrs.label,
				class: (vnode.attrs.error == null) ? '' : 'error',
				placeholder: vnode.attrs.placeholder,
				value: vnode.attrs.value(),
				disabled: (vnode.attrs.disabled == true),
				oninput: (e) => { vnode.attrs.value(e.target.value); },
				...customAttrs,
			})
		]);
	}
}
