const express = require('express');
const { findByIdAndUpdate } = require('../models/task');
const router = express.Router();

const Task = require('../models/task'); //get model to perform operations in mongodb

router.get('/', async (req, res) => {

    const tasks = await Task.find();
    console.log(tasks);
    res.json({
        tasks: tasks
    });
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json({
        task: task
    })
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    const task = new Task({ title, description });
    console.log(task);
    await task.save();
    res.json({
        status: "Task Saved"
    })
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({
        status: "Successfully updated"
    })
});

router.delete('/:id', async (req, res) => {
    const taskDeleted = await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: "Successfully removed",
        taskRemoved: taskDeleted
    });

});

module.exports = router;