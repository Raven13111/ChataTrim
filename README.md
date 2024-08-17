# ChataTrim: Real-Time Chat Optimizer for ChatGPT

**ChataTrim** is a lightweight script designed specifically for optimizing ChatGPT chat logs by limiting the number of displayed messages. This tool helps maintain performance when dealing with large logs in the ChatGPT interface.

## Key Features
- **Real-Time Optimization**: Automatically manages the number of visible chat messages to maintain smooth performance in ChatGPT.
- **Continuous Monitoring**: ChataTrim ensures that only the most recent messages are loaded, removing excess clutter.
- **Efficient and Lightweight**: Minimal resource usage by focusing only on necessary DOM elements.

## How to Use ChataTrim
1. Copy the JavaScript code from `script.js`.
2. Open your browser’s developer console (press `F12`).
3. Paste the code and press Enter.

You can also create a quick-access bookmarklet for repeated use:

### Bookmarklet Setup
1. Create a new bookmark in your browser.
2. Paste the following code as the URL:

```javascript:(function(){const maxMessagesToShow=20;let firstLoad=true;function trimMessages(){const conversationTurns=document.querySelectorAll('[data-testid^="conversation-turn"]');const totalMessages=conversationTurns.length;const excessMessages=totalMessages-maxMessagesToShow;if(firstLoad){console.log(`ChataTrim Loaded, detected ${totalMessages} chats, showing 20/${totalMessages}`);firstLoad=false;}if(excessMessages>0){for(let i=0;i<excessMessages;i++){conversationTurns[i].remove();}}}trimMessages();setInterval(trimMessages,1000);})();```

3. Whenever you need ChataTrim, simply click the bookmark.

## Why Use ChataTrim?
ChataTrim is perfect for optimizing performance when interacting with ChatGPT, especially in sessions with large chat logs. It keeps your chat interface responsive and clutter-free by showing only the most recent messages.

---

Enhance your ChatGPT experience with **ChataTrim** – the lightweight solution for keeping your chats streamlined and responsive.

