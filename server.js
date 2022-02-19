const express = require('express');
const next = require('next');
const fs = require('fs');
const https = require('https');
const http = require('http');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const options = {
    key: fs.readFileSync('./bing-bong.today+3-key.pem', 'utf-8'),
    cert: fs.readFileSync('./bing-bong.today+3.pem', 'utf-8'),
  };

  if (dev) {
    https
      .createServer(options, server, (req, res) => {
        console.log('필요한 코드 넣기');
      })
      .listen(port, () => {
        console.log(`서버 포트: https://bing-bong.today:${port} ...`);
      });
  } else {
    http
      .createServer(options, server, (req, res) => {
        console.log('필요한 코드 넣기');
      })
      .listen(port, () => {
        console.log(`서버 포트: http://bing-bong.today:${port} ...`);
      });
  }
});
