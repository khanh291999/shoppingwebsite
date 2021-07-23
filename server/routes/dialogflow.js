const express = require("express");
const router = express.Router();
const structjson = require("./structjson.js");
const dialogflow = require("dialogflow");
const uuid = require("uuid");
const config = require("../config/keys");
const axios = require("axios");
const app = express();
const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);
let array = [];

// Text Query Route

router.post("/textQuery", async (req, res) => {
  //We need to send some information that comes from the client to Dialogflow API
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.body.text,
        // The language used by the client (en-US)
        languageCode: languageCode,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  const result1 = responses[0].queryResult.queryText;
  const result2 = responses[0].queryResult.fulfillmentText;
  // Test
  let username = "";
  let email = "";
  let address = "";
  let opinion = "";
  // // if(responses[0].queryResult.fulfillmentText = "Please tell me your name"){
  // //     // username = responses[0].queryResult.fulfillmentText;
  // //     username = "khanh";
  // // }
  // // if(responses[0].queryResult.queryText == "Please tell me your email"){
  // //     email = responses[0].queryResult.fulfillmentText;
  // // }
  // // if(responses[0].queryResult.queryText == "Where do you live"){
  // //     address = responses[0].queryResult.fulfillmentText;
  // // }
  postdata = (username, email, address, opinion) => {
    username = array[1];
    email = array[2];
    address = array[3];
    opinion = array[4];
    axios
      .post("http://localhost:8080/opinion", {
        username,
        email,
        address,
        opinion,
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (result2.includes("name") === true) {
    username = result1;
    array.push(`${result1}`);
  }
  if (result2.includes("email") === true) {
    email = result1;
    array.push(`${result1}`);
  }
  if (result2.includes("address") === true) {
    address = result1;
    array.push(`${result1}`);
  }
  if (result2.includes("impression ") === true) {
    opinion = result1;
    array.push(`${result1}`);
  }
  if (result2.includes("Thank you") === true) {
    array.push(`${result1}`); 
    postdata(username, email, address, opinion);
    array = [];
  }
  res.send(result);
});

//Event Query Route

router.post("/eventQuery", async (req, res) => {
  //We need to send some information that comes from the client to Dialogflow API
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      event: {
        // The query to send to the dialogflow agent
        name: req.body.event,
        // The language used by the client (en-US)
        languageCode: languageCode,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  res.send(result);
});

module.exports = router;
