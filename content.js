function isOnGithub() {
  return window.location.hostname.includes("github.com");
}

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

function isOnTwitter() {
  return window.location.hostname.includes("twitter.com");
}

function isOnTiktok() {
  return window.location.hostname.includes("tiktok.com");
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //imagine using light mode
    if (request.action === "replaceLogo" && isOnGithub()) {
      const logoElement = document.querySelector("svg.octicon.octicon-mark-github");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "github-logo");
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/GitHub.svg"));
        logoElement.replaceWith(imgElement);
      }
    }

    //youtube (please don't use shorts)
    if (request.action === "replaceLogo" && isOnYouTube()) {
      const logoElement = document.querySelector("yt-icon#logo-icon");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "youtube-logo");

        const html = document.querySelector("html")
        if (html.getAttribute('dark') !== null) {
          imgElement.setAttribute("src", chrome.runtime.getURL("assets/dark/YouTube-Dark.svg"));
        }
        else {
          imgElement.setAttribute("src", chrome.runtime.getURL("assets/YouTube.svg"));
        }
        logoElement.replaceWith(imgElement);
      }
    }

    //instagram (for da gram)
    if (request.action === "replaceLogo" && isOnInstagram()) {
      //literally only div da gram boss forgot to disable replace
      const logoElement = document.querySelector("div#splash-screen");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "instagram-logo");
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/Instagram.svg"));
        logoElement.replaceWith(imgElement);
      }
    }

    //facebook (old ppl lol)
    if (request.action === "replaceLogo" && isOnFacebook()) {
      const logoElement = document.querySelector("svg.x1lliihq.x1ujvgzy");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "facebook-logo");
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/Facebook.svg"));
        logoElement.replaceWith(imgElement);
      }
    }

    //my name Jeff
    if (request.action === "replaceLogo" && isOnAmazon()) {
      const logoElement = document.querySelector("span.nav-sprite.nav-logo-base");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "amazon-logo");
        imgElement.setAttribute("src", chrome.runtime.getURL("assets/Amazon.svg"));
        logoElement.replaceWith(imgElement);
      }
    }

    //imagine buying a blue checkmark
    if (request.action === "replaceLogo" && isOnTwitter()) {
      const logoElement = document.querySelector("noscript");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "twitter-logo");

        // display different image according to theme
        const bodyStyle = getComputedStyle(document.body);
        if (bodyStyle.backgroundColor === 'rgb(0, 0, 0)') {
          imgElement.setAttribute("src", chrome.runtime.getURL("assets/dark/Twitter-Dark.svg"));
        } 
        else if (bodyStyle.backgroundColor === 'rgb(21, 32, 43)') {
          imgElement.setAttribute("src", chrome.runtime.getURL("assets/dark/Twitter-Dim.svg"));
        } 
        else {
          imgElement.setAttribute("src", chrome.runtime.getURL("assets/Twitter.svg"));
        }

        logoElement.replaceWith(imgElement);
      }
    }

    //pls no...
    if (request.action === "replaceLogo" && isOnTiktok()) {
      const logoElement = document.querySelector("div.tiktok-un797x-DivHeaderLeftContainer.e15qqn8h1");
      if (logoElement) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("id", "tiktok-logo");
        const wrapper = document.createElement("a");

        // display different image according to theme
        const html = document.querySelector('html');
        if (html.getAttribute('data-theme') === 'dark') {
          imgElement.setAttribute("src", chrome.runtime.getURL("assets/TikTok-Dark.svg"));
        } else {
          imgElement.setAttribute("src", chrome.runtime.getURL("assets/TikTok.svg"));
        }
        
        wrapper.appendChild(imgElement);
        wrapper.setAttribute("href", "/")
        logoElement.replaceWith(wrapper);
      }
    }
});
  
chrome.runtime.sendMessage({ action: "replaceLogo" });