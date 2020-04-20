import m from 'mithril';

import TabPaneState from '@/components/TabPane/TabPaneState';

import TabPaneHeader from '@/components/TabPane/TabPaneHeader';

import '@/css/components/TabPane.css';

export default {
  oninit: (vnode) => {
    vnode.state.tabState = new TabPaneState(Object.keys(vnode.attrs.tabs)[0]);
  },

  view: (vnode) => {
    const tabKeys = Object.keys(vnode.attrs.tabs);
    return m('.tabed_pane', [
      m(TabPaneHeader, { tabs: tabKeys, tabState: vnode.state.tabState }),
      m('div.tab_pane_body', vnode.attrs.tabs[vnode.state.tabState.getSelectedTab()]),
    ]);
  },
};
