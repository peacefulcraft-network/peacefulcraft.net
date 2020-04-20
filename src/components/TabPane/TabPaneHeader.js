import m from 'mithril';

export default {
  view: (vnode) => {
    return m('div.tab_pane_header',
      vnode.attrs.tabs.map((tab) => {
        return m('span.tab_pane_header_tab', {
          class: (vnode.attrs.tabState.getSelectedTab() === tab)? 'selected' : '',
          onclick: () => vnode.attrs.tabState.setSelectedTab(tab),
        }, tab);
      })
    );
  },
};