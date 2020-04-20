export default class {
  constructor(defaultTabId) {
    this.selectedTabId = defaultTabId;
  }

  getSelectedTab() {
    return this.selectedTabId;
  }

  setSelectedTab(selectedTabId) {
    this.selectedTabId = selectedTabId;
  }
}