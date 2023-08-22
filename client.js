const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000, // Change this to your server's port if necessary
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.end();
