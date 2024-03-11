const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Simple App</title>');
  res.write('</head>');
  res.write('<body style="background-color: green; color: white; text-align: center;">');
  res.write('<h1>Application deployed</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
