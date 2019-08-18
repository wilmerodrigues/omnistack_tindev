const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const server = express();

mongoose.connect('mongodb+srv://wilme:wilme@cluster0-0s1vd.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

const port = 3333;
server.listen(port, () => {
    console.log(`Server Listening on port ${port}!`)
});