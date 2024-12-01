import React, { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Send, Clear, Person, SmartToy } from "@mui/icons-material";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, userMessage],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          }
        }
      );

      const botMessage = response.data.choices[0].message;
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "system", content: "An error occurred. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const renderMessageContent = (content) => (
    <ReactMarkdown
      children={content}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-600 to-indigo-700">
      {/* Header */}
      <div className="text-white text-2xl font-bold my-4">AI Chatbot</div>

      {/* Chat Container */}
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg flex flex-col overflow-hidden">
        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: "60vh" }}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`mb-4 flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className={`p-3 rounded-lg shadow-md ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                style={{ maxWidth: "70%" }}
              >
                <div className="flex items-center">
                  {msg.role === "user" ? (
                    <Person className="mr-2" />
                  ) : (
                    <SmartToy className="mr-2" />
                  )}
                  <div>{renderMessageContent(msg.content)}</div>
                </div>
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              className="mb-4 flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="p-3 bg-gray-200 text-black rounded-lg shadow-md">
                <span className="animate-pulse">AI is typing...</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input and Actions */}
        <div className="flex items-center p-4 bg-gray-50 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
          >
            <Send />
          </button>
          <button
            onClick={clearChat}
            className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600"
          >
            <Clear />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
