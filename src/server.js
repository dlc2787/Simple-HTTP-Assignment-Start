// require
const http = require('http');
const htmlHandler = require('./htmlResponse');
const textHandler = require('./textResponse');
const jsonHandler = require('./jsonResponse');
const imageHandler = require('./imageResponse');

// port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// request handling
const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.getMeme(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

// startup
http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);
