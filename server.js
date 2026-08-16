const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const response = {
        message: 'Node.js application is running!',
        status: 'success',
        hostname: require('os').hostname(),
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url
    };

    res.end(JSON.stringify(response, null, 2));
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    console.log(`Access locally: http://localhost:${PORT}`);
});
