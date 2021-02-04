const fs = require('fs'); // pull filesystem module

// set pages
const dankmeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// response functions
const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankmeme);
  response.end();
};

module.exports.getMeme = getMeme;
