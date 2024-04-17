import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePusher } from 'react-pusher';

function Chat() {
  const [sessionId, setSessionId] = useState(null); // Session ID
  const [chatHistory, setChatHistory] = useState([]); // Chat history
  const [message, setMessage] = useState(''); // Message content

  const pusher = usePusher({
    appId: 'YOUR_PUSHER_APP_ID',
    key: 'YOUR_PUSHER_KEY',
    cluster: 'YOUR_PUSHER_CLUSTER',
    channel: `session.${sessionId}`,
  });

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (sessionId) {
        const response = await Inertia.get('/chat/history', { session_id: sessionId });
        setChatHistory(response.data);
      }
    };

    fetchChatHistory();

    if (pusher) {
      const channel = pusher.channel(`session.${sessionId}`);
      channel.bind('new-message', handleNewMessage);

      return () => channel.unbind('new-message', handleNewMessage);
    }
  }, [sessionId, pusher]);

  const handleNewMessage = (data) => {
    setChatHistory((prevHistory) => [...prevHistory, data.message]);
  };

  const sendMessage = async () => {
    if (!message) return; // Handle empty message attempts

    await Inertia.post('/chat/send', { session_id: sessionId, message });
    setMessage(''); // Clear message input after sending
  };

  return (
    <div className="chat-container">
      <h2>Session Chat</h2>
      <ul className="chat-history">
        {chatHistory.map((message) => (
          <Message key={message.id} message={message} /> // Use Message component if desired
        ))}
      </ul>
      <div className="message-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
