# Chat-Bot for [Twitch](https://www.twitch.tv)



## Get Started

### 1. Download and install [Node.js](https://nodejs.org/en/)

### 2. Clone repository or download `.ZIP`-file

### 3. Install dependencies using CLI:

`./twitch-bot/`
```sh
npm i
```

### 4. Edit connection settings:

 `./twitch-bot/config/connect.js`
```js
export default {
  portConst: 80, //port
  userName: "", //Bot name
  oauth: "oauth:...", //Bot OAuth token
  channels: ["channel_name_1",...,"channel_name_N"], //array of channels
};
```

_OAuth token you can get [here](http://twitchapps.com/tmi/)._

### 5. Create list of ban-words:

`./twitch-bot/config/constants.js`
```js
export const banWords = ["some_bad_word",...,"another_bad_word"];
```

### 6. Run **Bot** using CLI:

`./twitch-bot/`
```sh
npm run bot
```