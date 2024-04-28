import React, { useState, useEffect } from 'react';
import { usePusher } from 'react-pusher';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const ChatMessage = ({ sessionId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState(null); // State for error handling

  const pusher = usePusher(process.env.REACT_APP_PUSHER_APP_KEY); // Assuming Pusher key in a React environment variable

  useEffect(() => {
    const channel = pusher.subscribe(`session.${sessionId}`);
    channel.bind('message-sent', data => {
      setMessages(prevMessages => [...prevMessages, data.message]);
    });

    return () => channel.unsubscribe(); // Cleanup on unmount
  }, [pusher, sessionId]);

  const sendMessage = async () => {
    setError(null); // Clear any previous errors

    if (!newMessage) {
      setError('Please enter a message to send.');
      return;
    }

    try {
      const response = await axios.post(`/api/chat/messages/${sessionId}`, {
        message: newMessage,
      });

      // Assuming successful response from the server (e.g., includes the saved message)
      setMessages(prevMessages => [...prevMessages, response.data]);
      setNewMessage(''); // Clear the input field after successful send
    } catch (error) {
      console.error('Error sending message:', error);
      setError('An error occurred while sending the message. Please try again.');
    }
  };

  // New chat message component (replace with your actual implementation)
  const ChatMessageBox = ({ message }) => {
    // Display message content and sender details (adjust based on your model)
    return (
      <div className="chat-message">
        {message.sender_id === userId ? (
          <span className="sender">You</span>
        ) : (
          <span className="sender">{message.sender.name}</span>
        )}
        <p>{message.content}</p>
      </div>
    );
  };

  return (
    <div className="chat-container">
      <h2>Chat</h2>
      {error && <div className="error-message">{error}</div>}
      <ul className="messages">
        {messages.map(message => (
          <ChatMessageBox key={message.id} message={message} />
        ))}
      </ul>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatMessage;
