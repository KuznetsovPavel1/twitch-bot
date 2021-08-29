import express from "express";
import http from "http";
import tmi from "tmi.js";

import { momentDateTime, isBan } from "./functions/functions.js";

import connect from "./config/connect.js";
const { userName, oauth, channels, portConst } = connect;
import { constants } from "./config/constants.js";
const { banWordTimeout } = constants;

const app = express();

const port = process.env.PORT || portConst;

const server = http.createServer(app);

const client = new tmi.Client({
  options: { debug: false },
  identity: {
    username: userName,
    password: oauth,
  },
  channels: channels,
});

server.listen(port, () => {
  try {
    console.log(`${momentDateTime()} | Bot is running on port ${port}`);

    client
      .connect()
      .catch((err) =>
        console.error(`${momentDateTime()} | Connection error: ${err}`)
      );
  } catch (err) {
    console.error(`${momentDateTime()} | Something went wrong! ${err}`);
  }
});

client.on("connected", (address, port) => {
  console.log(`${momentDateTime()} | Bot connected to ${address}:${port}`);
});

client.on("message", (channel, tags, message, self) => {
  const { id, username } = tags;

  if (isBan(message)) {
    client
      .deletemessage(channel, id)
      .then((data) => {
        console.log(`${momentDateTime()} | Message ${id} was deleted`);
      })
      .catch((err) => {
        console.error(
          `${momentDateTime()} | Message ${id} deleting error: ${err}`
        );
      });
    client
      .timeout(channel, username, banWordTimeout, "banword detected")
      .then((data) => {
        // data returns [channel, username, seconds, reason]
        console.log(
          `${momentDateTime()} | ${data[1]} was muted for ${data[2]} seconds`
        );
      })
      .catch((err) => {
        console.error(`${momentDateTime()} | User muting error: ${err}`);
      });
  }
});
