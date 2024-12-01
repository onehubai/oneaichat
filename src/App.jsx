import React from "react";
import ChatBot from "./components/ChatBot";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <ChatBot />
    </div>
  );
};

export default App;
