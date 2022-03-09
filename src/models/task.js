const mongoose = require('mongoose');
const { Schema } = mongoose;

//define the structure of task data
const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

//puede tener cualquier nombre
module.exports = mongoose.model('Task', TaskSchema);