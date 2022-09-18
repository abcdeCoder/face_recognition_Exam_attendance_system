const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const socket = require('socket.io');
const port = process.env.PORT || 5000;

app.use(cookieParser());

dotenv.config({ path: __dirname + '/.env' });

require('./db/connection.js');

app.use(cors());
app.use(express.json());

app.use(require('./router/auth.js'));

app.use(require('./router/chatRoutes.js'));

// app.get('/', (req, res) => {
//     res.send('running');
// })

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const server = app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
// establishing socket.io connection

const io = socket(server, {
    cors: {
        origin: "https://mernexam.herokuapp.com/",
    }
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-receive", data.message);
        }
    });
});
