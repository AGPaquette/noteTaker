const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
// Load initial data from the JSON file
const noteData = require("../db/db.json");
const dataPath = path.join(__dirname, "../db/db.json");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));
// Enable JSON request parsing
app.use(express.json());

// Serve the static files when a GET request is made to the root URL
app.get(
    res.sendFile(path.join(__dirname, "../public/index.html"))
)

app.get(
    res.sendFile(path.join(__dirname, "../public/notes.html"))
)
// Get all notes from the 'noteData' array when a GET request is made to '/api/notes'
app.get('/api/notes', (req, res) => {
    res.json(noteData)
}
)
// Create a new note and add it to the 'noteData' array when a POST request is made to '/api/notes'
app.post('/api/notes', (req,res) => {
    const newData = req.body;

    noteData.push(newData);
// Write the updated 'noteData' array to the JSON file
    fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2));
}

)
// Delete a note by its ID when a DELETE request is made to '/api/notes/:id'
app.delete('/api/notes/:id', (req, res) => {
    const dataId = req.body;
// Function to delete the note with the given ID
    const deleteData = (id, notedata) => {
        const updatedData = noteData.filter((note) => note.id !== id);
        noteData.length = 0;
        noteData.push(...updatedData)
    }

    deleteData(dataId, noteData);
// Write the updated 'noteData' array to the JSON file
    fs.writeFileSync(dataPath, JSON.stringify())
}

)

app.listen(3009)
