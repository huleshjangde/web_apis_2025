'use client';
import { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleUserMessage = (message: string) => {
    setMessages([...messages, message, 'Bot response...']);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className="p-2">
            <span>{msg}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="border-t p-2"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUserMessage((e.target as HTMLInputElement).value);
            (e.target as HTMLInputElement).value = '';
          }
        }}
      />
    </div>
  );
};

export default ChatBot;
