'use client';

import { useState } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Array<any>>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    // Add chat logic here
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Messages display */}
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
} 