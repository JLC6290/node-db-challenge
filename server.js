const express = require("express");

const server = express();

server.use(express.json());

const ProjectRouter = require('./routers/ProjectRouter');

server.use('/api', ProjectRouter);

module.exports = server;
