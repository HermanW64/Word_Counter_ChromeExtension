// Handle message from contetn.js and update UI
// It runs before page HTML loads
console.log("popup.js is loaded");

function updateWordCount() {
    // request the count from content.js and update UI result
    console.log("updateWordCount is called");
    const countDisplay = document.getElementById("wordCount");

    // listen for message from content.js
    // Query the active tab to get the count from content.js
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
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


document.addEventListener("DOMContentLoaded", () => {
    updateWordCount();
})

/*
document.addEventListener("visibilitychange", () => {
    // popup window is visible
    if (!document.hidden) {
        updateWordCount();
    }
});
*/