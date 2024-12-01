import React from "react";
import ChatBot from "./components/ChatBot";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-800 via-indigo-900 to-black text-white flex items-center justify-center">
      {/* Background Animation */}
      <AnimatedBackground />

      {/* Chat Container */}
      <div className="w-full max-w-4xl px-4">
        <div className="bg-white text-black shadow-2xl rounded-xl overflow-hidden">
          <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-center">
            <h1 className="text-2xl font-bold text-white">
              AI Chatbot
            </h1>
            <p className="text-sm text-indigo-200 mt-1">
              Powered by OpenAI GPT-3.5 Turbo
            </p>
          </header>
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default App;
