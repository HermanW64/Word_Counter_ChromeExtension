// Interact with DOM to perform tasks (Works in background)

// Clarify the logic:
// 1. Wait for the text-selection events (from user)
// 2. Get a function to count the words
// 3. Show the result to user
let wordCount = 0;

console.log("content.js is loaded");

function countWords(text) {
    // the function counts the number of words, given a string of text
    // parameter: text
    // return: an integer
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    //.split(/\s+/): "\s" any whitespace character (space, tab, line breaks), +: one or more occurrences
    // filter(word => word.length > 0): if => returns true, keep the element 
    // you can change left "word" to other variable names
    // if text length is 0, it automatically returns 0
}

function handleSelection() {
    // get the selected text from the user
    const selectText = window.getSelection().toString();
    console.log("selectText: ", selectText);

    if (selectText) {
        // count the number of words of selected text
        wordCount = countWords(selectText);
        console.log("wordCount: ", wordCount);       
    } else {
        wordCount = 0;
        console.log("wordCount: ", wordCount);     
    }
}

// Even we don't use "sender", we need all of three in right order
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "GET_COUNT") {
        sendResponse({count: wordCount});
    }
    // return true: let the message channel open for asynchronous response
    // Here it is not necessary, as message channel can be closed after sendResponse is called
    return true;
});


// evet listener for text-selection
// the 2nd parameter: callback function without (). It has to be called later not immediately
// It ocurrs when the event happens
document.addEventListener("mouseup", handleSelection);
document.addEventListener("keyup", handleSelection);