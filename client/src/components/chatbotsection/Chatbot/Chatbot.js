import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../_actions/message_actions";
import Message from "./Sections/Message";
import { List, Avatar } from "antd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Card from "./Sections/Card";

function Chatbot() {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector((state) => state.message.messages);
  useEffect(() => {
    eventQuery("Welcome");
  }, [dispatch]);

  const textQuery = async (text) => {
    //  First  Need to  take care of the message I sent
    let conversation = {
      who: "user",
      content: {
        text: {
          text: text,
        },
      },
    };

    dispatch(saveMessage(conversation));

    // We need to take care of the message Chatbot sent
    const textQueryVariables = {
      text,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await Axios.post(
        "http://localhost:8080/api/dialogflow/textQuery",
        textQueryVariables
      );

      for (let content of response.data.fulfillmentMessages) {
        conversation = {
          who: "bot",
          content: content,
        };

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      conversation = {
        who: "bot",
        content: {
          text: {
            text: " Error just occured, please check the problem",
          },
        },
      };

      dispatch(saveMessage(conversation));
    }
  };

  const eventQuery = async (event) => {
    // We need to take care of the message Chatbot sent
    const eventQueryVariables = {
      event,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await Axios.post(
        "http://localhost:8080/api/dialogflow/eventQuery",
        eventQueryVariables
      );
      for (let content of response.data.fulfillmentMessages) {
        let conversation = {
          who: "bot",
          content: content,
        };

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      let conversation = {
        who: "bot",
        content: {
          text: {
            text: " Error just occured, please check the problem",
          },
        },
      };
      dispatch(saveMessage(conversation));
    }
  };

  const keyPressHanlder = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("you need to type somthing first");
      }

      //we will send request to text query route
      textQuery(e.target.value);

      e.target.value = "";
    } 
  };

  const sendMessHanlder = () => {
      var value = document.getElementById('input-message').value;
      if (!value) {
        return alert("you need to type somthing first");
      }
      //we will send request to text query route
      textQuery(value);

      document.getElementById('input-message').value = '';
  };

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />);
  };

  const renderOneMessage = (message, i) => {
    console.log("message", message);

    // we need to give some condition here to separate message kinds

    // template for normal text
    if (message.content && message.content.text && message.content.text.text) {
      return (
        <Message key={i} who={message.who} text={message.content.text.text} />
      );
    } else if (message.content && message.content.payload.fields.card) {
      const AvatarSrc =
        message.who === "bot" ? <EmojiEmotionsIcon /> : <AccountCircleIcon />;

      return (
        <div>
          <List.Item style={{ padding: "1rem" }}>
            <List.Item.Meta
              avatar={<Avatar icon={AvatarSrc} />}
              title={message.who}
              description={renderCards(
                message.content.payload.fields.card.listValue.values
              )}
            />
          </List.Item>
        </div>
      );
    }

    // template for card message
  };

  const renderMessage = (returnedMessages) => {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  };

  return (
    <div
      id="scroll-bottom-container"
    >
      <div style={{ height: "200px", width: "100%", overflow: "auto" }} id="chat-message-list">
        {renderMessage(messagesFromRedux)}
      </div>
      <div style={{display:'flex'}}>
        <input
          style={{
            margin: 0,
            width: "100%",
            height: 50,
            borderRadius: "4px",
            padding: "5px",
            fontSize: "1rem",
          }}
          id="input-message"
          placeholder="Type a message..."
          onKeyPress={keyPressHanlder}
          type="text"
        />
        <button 
            onClick={sendMessHanlder}
            type="submit" 
            class="primary-button" 
            style={{
              width: '15%',
              backgroundColor: '#242424',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '0 5px 5px 0'
            }}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
