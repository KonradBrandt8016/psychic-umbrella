const mongoose = require('mongoose');
var usermod = require('user.model');
var taskmod = require('task.model');

const assignmentSchema = mongoose.Schema({
    user: usermod,
    task: [taskmod]
}, {
    timestamps: true
});