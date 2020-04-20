import m from 'mithril';

import '@/css/components/TabPanePanes/CodeInstruction.css';

export default {
  view: (vnode) => {
    return m('div.code_instruction_component', [
      m('div.code_instruction_instruction', vnode.attrs.instruction),
      m('div.code_instruction_code', vnode.attrs.code),
    ]);
  },
};