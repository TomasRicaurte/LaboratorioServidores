const http = require ("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
    const url = new URL(req.url, `https://localohst:${port}/`);
    if (url.pathname === "/"){
    res.setHeader("Content.Type", "application/json") 
    res.writeHead(200);
    res.end();
    } else if (url.pathname === "/user"){
        const name = url.searchParams.get("name")
        const email = url.searchParams.get("email")

        const userObj = {
            name: name,
            email: email
        }
        const userJson = JSON.stringify(userObj)
    res.setHeader("Content.Type", "application/json") 
    res.writeHead(200);
    res.end(userJson);
    }
};

const server = http.createServer(requestListener);
module.exports = server;

