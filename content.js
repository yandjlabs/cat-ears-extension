function isOnYouTube() {
  return window.location.hostname.includes("youtube.com");
}

function isOnFacebook() {
  return window.location.hostname.includes("facebook.com");
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //youtube
    if (request.action === "replaceLogo" && isOnYouTube()) {
      const logoElement = document.querySelector(".yt-spec-icon-shape div svg.external-icon");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "");
        imgElement.style.width = "90px";
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/YouTube.svg"));
        logoElement.replaceWith(imgElement);
      }
    }

    //facebook (old ppl lol)
    if (request.action === "replaceLogo" && isOnFacebook()) {
      const logoElement = document.querySelector("svg.x1lliihq.x1ujvgzy");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "");
        imgElement.style.width = "90px";
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/Facebook.svg"));
        logoElement.replaceWith(imgElement);
      }
    }
});
  
chrome.runtime.sendMessage({ action: "replaceLogo" });