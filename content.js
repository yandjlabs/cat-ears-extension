function isOnYouTube() {
  return window.location.hostname.includes("youtube.com");
}

function isOnInstagram() {
  return window.location.hostname.includes("instagram.com");
}

function isOnFacebook() {
  return window.location.hostname.includes("facebook.com");
}

function isOnAmazon() {
  return window.location.hostname.includes("amazon.com");
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //youtube (please don't use shorts)
    if (request.action === "replaceLogo" && isOnYouTube()) {
      const logoElement = document.querySelector("yt-icon#logo-icon");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "");
        imgElement.style.width = "90px";
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/YouTube.svg"));
        logoElement.replaceWith(imgElement);
      }
    }

    //instagram (for da gram)
    if (request.action === "replaceLogo" && isOnInstagram()) {
      const logoElement = document.querySelector("div._aagx svg._ab6-");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "");
        imgElement.style.width = "90px";
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/Instagram.svg"));
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

    //My name Jeff
    if (request.action === "replaceLogo" && isOnAmazon()) {
      const logoElement = document.querySelector("span.nav-sprite.nav-logo-base");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "");
        imgElement.style.height = "80px";
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/Amazon.svg"));
        logoElement.replaceWith(imgElement);
      }
    }
});
  
chrome.runtime.sendMessage({ action: "replaceLogo" });