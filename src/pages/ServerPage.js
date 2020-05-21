import m from 'mithril';

import BlueLink from '@/components/BlueLinkElement';
import Slidshow from '@/components/Slideshow/Slideshow';
import TabPane from '@/components/TabPane/TabPane';
import TabedPane_CodeInstruction from '@/components/TabPane/Panes/CodeInstruction';

import '@/css/pages/ServerPage.css';

export default {

  generateInstructionTabs: (instructions) => {
    const obj = {};
    Object.keys(instructions).forEach((k) => {
      obj[k] = m('div', instructions[k].map((i) => {
        return m(TabedPane_CodeInstruction, i);
      }));
    });
    return obj;
  },

  view: (vnode) => {
    return m('#server_page', [
      m('.server_page_slideshow', m(Slidshow, {
        slideDelay: 6500,
        images: vnode.attrs.copy.slideshow,
      })),

      m('', { style: 'height: 40px;' }),

      m('.server_page_body', [
        /* Info Blurb */
        m('.server_info_blurb', vnode.attrs.copy.infoBlurb),

        m('', { style: 'height: 40px;' }),

        /* Connection Instructions */
        m(TabPane, { tabs: vnode.state.generateInstructionTabs(vnode.attrs.copy.connectInstructions) }),

        m('', { style: 'height: 40px;' }),

        /* Resource Links */
        m('div.server_resources_label', { class: 'server_info_section_label' }, 'Resources and Links'),
        ...vnode.attrs.copy.resourceLinks.map((link) => {
          return m('.server_resources_link', m(BlueLink, { href: link.href }, link.title));
        }),

        m('', { style: 'height: 80px;' }),
      ]),
    ]);
  },
};
