(function() {
  const maxMessagesToShow = 20;
  let firstLoad = true;

  function trimMessages() {
    const conversationContainer = document.querySelector('[data-testid^="conversation-turn"]')?.parentElement;
    if (!conversationContainer) return;

    const messages = Array.from(conversationContainer.children);
    const totalMessages = messages.length;

    if (firstLoad) {
      console.log(`ChataTrim Loaded, detected ${totalMessages} chats, showing 20/${totalMessages}`);
      firstLoad = false;
    }

    if (totalMessages > maxMessagesToShow) {
      messages.slice(0, totalMessages - maxMessagesToShow).forEach(msg => msg.remove());
    }
  }

  trimMessages();

  setInterval(trimMessages, 2000);
})();
