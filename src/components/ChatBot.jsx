import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Input, Paper, Typography, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { particlesOptions } from "./particlesOptions"; // particles config

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    const newMessage = { type: "user", text: message };
    setChatHistory([...chatHistory, newMessage]);

    try {
      const response = await axios.get(
        `https://chat.onedevai.workers.dev/?prompt=${encodeURIComponent(message)}`
      );

      if (response.status === 200) {
        const botReply = { type: "bot", text: response.data };
        setChatHistory((prev) => [...prev, newMessage, botReply]);
        setMessage(""); // Clear input
      } else {
        setChatHistory((prev) => [
          ...prev,
          { type: "bot", text: `Error: ${response.statusText}` },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error); // Log the error in the console
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: `Sorry, something went wrong: ${error.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: "relative", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* Particle background */}
      <Particles options={particlesOptions} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
      
      <Paper sx={{ width: "90%", maxWidth: 600, padding: 3, marginBottom: 3, position: "relative", zIndex: 10 }}>
        <Typography variant="h5" align="center" gutterBottom>
          AI ChatBot
        </Typography>

        <Box sx={{ maxHeight: "400px", overflowY: "auto", mb: 2, padding: 2, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
          {chatHistory.map((msg, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <Box
                sx={{
                  backgroundColor: msg.type === "user" ? "#d1e7dd" : "#f8d7da",
                  padding: 2,
                  borderRadius: 2,
                  textAlign: msg.type === "user" ? "right" : "left",
                  marginBottom: 2,
                }}
              >
                {msg.text}
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            fullWidth
            disableUnderline
            sx={{
              padding: 1.5,
              border: "1px solid #ccc",
              borderRadius: 2,
              backgroundColor: "#fff",
              "&:focus": { borderColor: "#007bff" },
            }}
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            disabled={loading}
            sx={{
              minWidth: "100px",
              padding: "12px",
              borderRadius: 2,
              backgroundColor: loading ? "#ccc" : "#007bff",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Send"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatBot;
