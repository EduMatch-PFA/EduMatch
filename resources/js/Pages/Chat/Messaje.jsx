import React from 'react';

function Message({ message }) {
  const { senderName, content, timestamp } = message; // Adjust based on your message data structure

  return (
    <li className="message">
      <span className="sender">{senderName}</span>
      <span className="content">{content}</span>
      <span className="timestamp">{timestamp}</span>
    </li>
  );
}

export default Message;
