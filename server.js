const app = require('http');

const server = app.createServer((req, res) => {
    res.end("Server create only javascript and nodejs By: rdm Dev")
})
server.listen(3000);
console.log("Server running on port 3000");