// The file notes down some important tech knowledge and skills for Chrome extension development
// Even a simple Chrome extension project can bring you a lot of knowledge and skills that you will need in the future.

# Product Design
## User flow mapping
You need to define the sequence of events and actions that a user takes to complete a task. In this project, we expect only one user flow:

Open the webpage --> Select (Highlight) text using mouse --> Click the extension icon --> See the number of words in the pop-up window 

## User case specification
Define particular and specific scenario of what (user groups) do what (actions) to achieve what (results or goals). 

## User behavior definition
Define how the system responds to certain user input or actions, espeically when the behavior or input is unexpected.

- What is expected when users didn't select any text? (Users click the webpage but didn't highlight any text)

- What is expected when users fail to highlight a complete word? (For example, users only highlight "spec" from "specification")

- What if users click the extension icon without highlighting any text?

# JavaScript Event Listeners
## Respond to message request
The following code snippet shows how to send message from one JS file to another JS file. It only sends a message (wordCount) when it receives a message requestwith type "GET_COUNT". Besides, about the addListener function's parameters, we need to include message, sender, and sendResponse, even if we don't use "sender".

``` JavaScript
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "GET_COUNT") {
            sendResponse({count: wordCount});
        }
        // return true: let the message channel open for asynchronous response
        // Here it is not necessary, as message channel can be closed after sendResponse is called
        return true;
    });
```

Moreover, the code snippet is outside the scope of any function. It is at the top level of the file, so it is independent to all JavaScript functions in the file. Once the JS file is loaded, the code snippet will be executed.

## Event listeners
Event listeners can be used with callback functions to perform certains tasks. It is similar to the trigger: once the event happens (be listened), the function will be called. See the code snippet:

``` JavaScript
    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("keyup", handleSelection);
```

When "mouseup" or "keyup" event happens, the function handleSelection will be called.

## Send message request to get data
The following code snippet is inside a function "updateWordCount". It is only triggered when the DOM content is loaded. The DOM content here refers to the HTML content of the webpage because popup.js is linked to the html file.

``` JavaScript
    // returns the active tab (in-foucs & in browser window), here only one element in the array tabs
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
```

## Arrow functions
Basic structure:
(parameters) => {... } 
The arrow function is a function expression. It is a shorter way to write a function. 
- (parameters): the parameters of the function
- {...}: the body of the function
