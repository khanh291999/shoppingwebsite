import React from "react";
import { Typography } from "antd";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import '../../assets/ChatBot.css'
import Chatbot from "./Chatbot/Chatbot";
import ChatIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';
const { Title } = Typography;

function Chatbotsection() {
  return (
    <div>
      <div
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginTop: "2rem",
          backgroundColor: 'aqua',
          fontSize: '1.1rem',
          borderRadius: '15px 15px 0 0'
        }}
      >
        <Title level={2}>
          CHAT BOT APP&nbsp;
          <EmojiEmotionsIcon />
        </Title>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <Chatbot />
      </div>
      {/* <label for="click" id="message-icon">
        <ChatIcon id="message-deactivate"/>
        <CloseIcon id="message-activate"/>
      </label> */}
    </div>
  );
}

export default Chatbotsection;
