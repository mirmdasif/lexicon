//content script
var clickedEl = null;

document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) { 
        clickedEl = event.target;
    }
}, true);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.value == "innerHTML") {
      sendResponse({value: clickedEl.innerHTML});
    }
});