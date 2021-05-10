import React from "react";
import Demo from "./admin/mainpage/CustomMenu"
import '../assets/ChatBot.css'
import Chatbot from './chatbotsection/Chatbot/Chatbot'

export default function Home() {
  return (
    <div style={{height:'700px'}}>
        <input type="checkbox" id="click"/>
        <label id="chatbot-icon" for="click">
            <i class="fab fa-facebook-messenger"></i>
            <i class="fas fa-times"></i>
        </label>
        <div class="wrapper">
            <div class="head-text">Chatbot</div>
            <div class="chat-bot">
                    <Chatbot/>
            </div>
        </div>
    </div>
  );
}
