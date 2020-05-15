const express = require("express");

const server = express();

server.use(express.json());

const ProjectRouter = require('./routers/ProjectRouter');
const TaskRouter = require('./routers/TaskRouter');

server.use('/api', ProjectRouter, TaskRouter);

module.exports = server;
