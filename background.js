chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "View Meaning in Vocabulary.com";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context,"link"],
                                         "id": "context" + 'lexicon'});  
});

chrome.contextMenus.onClicked.addListener(onClickHandler);
// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText;
  if (info.selectionText) {
  	 openWindow(info.selectionText);
  }

  if (info.linkUrl) {
    chrome.tabs.sendMessage(tab.id, {value: "innerHTML"}, function(response) {
      openWindow(response.value);
    }); 
  }
}

function openWindow(sText) {
  var url = "http://www.vocabulary.com/dictionary/" + encodeURIComponent(sText);  
  window.open(url, '_blank');
}