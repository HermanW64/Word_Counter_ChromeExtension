# Word Counter: Simple Chrome Extension

## Project description
This is a simple Chrome extension to count the number of words in selected text in current webpage. 
When some text is selected, the user can click the extension icon to check the number of words in the pop-up window. 

It is my first Chrome extension project. I did it because I was inspired by an article on Twitter about AI-powered Chrome extension development. I was cooperating with my AI assistant in Windsurf on the development. Surprsingly, we spent only less than 1 day to complete the MVP (minimum viable product), despite little prior experience in web development. 

## How to use the extension
1. Clone the repository to your local machine, or just download the zip file and unzip it.
2. Open Chrome and go to chrome://extensions, and turn on "Developer mode" (top right corner)
3. Click "Load unpacked" and select the folder containing the entire extension files
4. Enable the extension and make sure "Word Counter" is pinned. (You need to see the icon on the top right corner of the browser window)
5. Open a text-based webpage and select some text using mouse. The selected text will be highlighted.
6. Click the extension icon to open the pop-up window. Then you can see the number of words selected in the window.

## Project tech stack
- HTML
- Vanilla CSS
- Vanilla Javascript

## Project structure
The project is a simple Chrome extension, but it has all necessary files and components. More details see <a href="https://developer.chrome.com/docs/extensions/get-started">Google Chrome Extension Guide</a>
### Manifest.json
It contains important metadata of the extension. They are:
- name, description
- action
| - default_popup: the html file that determines the user interface of the extension
| - default_icon: the icon of the extension
- permissions
- host_permissions
- content_scripts: 
| - js: the js file that will be injected to the webpage to perform certain tasks
| - matches: the url pattern of the webpage in which the extension will work

### Extension UI
The extension UI is a pop-up window that shows the number of words in the selected text. It onlyt pops-up when the extension icon is clicked. The icon is usually located on the top right corner of the browser window, and you need to make sure the extension is enabled and pinned.
- popup.html: the basic html file that generates the pop-up window to show the number of words
- popup.css: the css file that styles the pop-up window
- popup.js: (important) the js file that handles the message from content.js and updates the UI

### Content script
The content script is a js file that will be injected to the webpage to count the number of words in selected text. It sends the result to popup.js, so that the result in popup.html can be updated.
- content.js

## Connection Invitation
If you have any questions or suggestions, please let me know. I am open to new ideas and suggestions.
Send me an email at <a href="mailto:hermanw2112@gmail.com">hermanw2112@gmail.com</a>