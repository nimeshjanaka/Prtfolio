const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post("/send", async (req, res) => {
  const { name, email, number, subject, message } = req.body;
  const fullMessage = `From: ${name}, Email: ${email}, Number: ${number}, Subject: ${subject}, Message: ${message}`;

  try {
    await twilioClient.messages.create({
      body: fullMessage,
      from: "whatsapp:+94741545600",
      to: `whatsapp:${process.env.MY_WHATSAPP_NUMBER}`,
    });
    res.send("Message sent successfully");
  } catch (error) {
    console.error("Failed to send message:", error);
    res.status(500).send("Failed to send message");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
