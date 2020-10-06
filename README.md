# Discord meme bot

This is the code I use for a discord bot that sends memes.

# Commands

The available commands are:

- `send meme`: Send a random meme from new
- `send hot meme`: Send a random meme from hot
- `send wholesome meme`: Send a random wholesome meme from [r/wholesomememes](https://www.reddit.com/r/wholesomememes/new)
- `send dank meme`: Send a random dank meme from [r/dankmemes](https://www.reddit.com/r/dankmemes/new)
- `send anime meme`: Send a random anime meme from [r/goodanimemes](https://www.reddit.com/r/goodanimemes/new)
- `send girl with mimi`: Send a random anime girl with mimi (animal ears) from [r/kemonomimi](https://www.reddit.com/r/kemonomimi/new)

# Development guide

## Requirements

- Node.js 14.7.0
- discord.js 12.3.1

Please read the [discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome) for how to implement bot with Node.js.

## API

API used for meme bot has its source code at: [Reddit api meme](https://github.com/Huy-Ngo/reddit-meme-api). Please contribute to that project
if you find that the current API doesn't fulfill your planned feature.

## Running

To run the bot, use command `node index.js`.
