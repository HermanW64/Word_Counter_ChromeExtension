// Handle message from contetn.js and update UI
// It runs before page HTML loads
console.log("popup.js is loaded");

function updateWordCount() {
    // request the count from content.js and update UI result
    console.log("updateWordCount is called");
    const countDisplay = document.getElementById("wordCount");

    // Query the active tab to get the count from content.js
    // Find the active tabs and return an array of active tabs (in-focus & in browser window)
    // tabs actually has only one element
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        // send a message to content.js (running in the current active tab), message type: "GET_COUNT"
        chrome.tabs.sendMessage(tabs[0].id, {type: "GET_COUNT"}, (response) => {
            if (chrome.runtime.lastError) {
                console.log("Error:", chrome.runtime.lastError.message);
                countDisplay.textContent = "Selected Words: 0";
                return;            
            }
            
            const wordCount = response ? response.count || 0 : 0;
            countDisplay.textContent = `Selected Words: ${wordCount}`;
        });
    });

    console.log("updateWordCount is called");
}

// Wait for the DOM content (pop-up window) to load
// Reason: the file is linked to the html file
document.addEventListener("DOMContentLoaded", updateWordCount);