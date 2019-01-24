const http = require('http');
const Discord = require('discord.js');

const client = new Discord.Client();
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NTM4MDg1NDMxMDI4NDgyMDQ4.DyusWg.UMWvArrQkgJbCc5y9xQzmucatvg');

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 