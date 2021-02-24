const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
function handleRequest (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}
https.createServer(options, handleRequest).listen(8000);
