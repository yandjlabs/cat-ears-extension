chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "replaceLogo") {
      chrome.tabs.sendMessage(sender.tab.id, {
        action: "replaceLogo",
        logoUrl: chrome.runtime.getURL("assets/YouTube.svg")
      });
    }
});