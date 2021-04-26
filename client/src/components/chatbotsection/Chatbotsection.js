import React from "react";
import { Typography } from "antd";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Chatbot from "./Chatbot/Chatbot";
const { Title } = Typography;

function Chatbotsection() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
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
    </div>
  );
}

export default Chatbotsection;
