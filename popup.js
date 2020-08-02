function setToggleState() {
  chrome.storage.sync.get('isExtensionActive', storage => {
    chrome.storage.sync.set({
      isExtensionActive: !storage.isExtensionActive,
    });
  });
}
