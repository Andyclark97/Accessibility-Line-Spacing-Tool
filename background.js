var changes = false;

chrome.browserAction.onClicked.addListener(function(tab) {
	if (changes == false){
		chrome.tabs.executeScript(null, {file: "script.js"});
		changes = true;
	}
	else {
		chrome.tabs.executeScript(null, {file: "undoScript.js"});
		changes = false;
	}
});