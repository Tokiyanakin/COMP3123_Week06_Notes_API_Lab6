const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM']
    },
    dateAdded: String,
    dateUpdated: String
});

module.exports = mongoose.model('Note', noteSchema);