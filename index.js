const http = require('http');
const { Client, MessageAttachment } = require('discord.js');

const config = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const sendMeme = (res) => {
        let str = '';
        res.on('data', (chunk) => {
            str += chunk;
        });

        res.on('end', () => {
            const fullResponse = JSON.parse(str);
            msg.channel.send(fullResponse.url);
        });
    }

    /* This send a random meme from a list */
    const sendRandomMeme = (res) => {
        let str = '';
        res.on('data', (chunk) => {
            str += chunk;
        });

        res.on('end', () => {
            const fullResponse = JSON.parse(str);
            const randomIndex = Math.floor(Math.random() * fullResponse.length)
            const selectedMeme = fullResponse[randomIndex];
            msg.channel.send(selectedMeme.url);
        });
    }
    const message = msg.content.toLowerCase();
    if (message === 'send meme') {
        http.get({
            hostname: config.apiHost,
            port: config.apiPort,
            path: '/memes/new'
        }, sendMeme);
    } else if (message === 'send hot meme') {
        http.get({
            hostname: config.apiHost,
            port: config.apiPort,
            path: 'memes/hot'
        }, sendMeme)
    } else if (message === 'send wholesome meme') {
        http.get({
            hostname: config.apiHost,
            port: config.apiPort,
            path: 'memes/wholesomememes'
        }, sendRandomMeme)
    } else if (message === 'send dank meme') {
        http.get({
            hostname: config.apiHost,
            port: config.apiPort,
            path: 'memes/dankmemes'
        }, sendRandomMeme)
    } else if (message === 'send anime meme') {
        http.get({
            hostname: config.apiHost,
            port: config.apiPort,
            path: 'memes/goodanimemes'
        }, sendRandomMeme)
    } else if (message === 'send girl with mimi') {
        http.get({
            hostname: config.apiHost,
            port: config.apiPort,
            path: 'memes/kemonomimi'
        }, sendRandomMeme)
    }
});

client.login(config.token);
