const Note = require('../models/note');

const createNote = (req, res) => {
    const { title, datetime, note } = req.body;
    Note.addNote(title, datetime, note, (err, id) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding note', error: err });
        }
        res.status(201).json({ message: 'Note added successfully', id });
    });
};

const getAllNotes = (req, res) => {
    Note.getAllNotes((err, notes) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching notes', error: err });
        }
        res.status(200).json(notes);
    });
};

const getNote = (req, res) => {
    const { id } = req.params;
    Note.getNoteById(id, (err, note) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching note', error: err });
        }
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    });
};

const updateNote = (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    Note.updateNote(id, title, datetime, note, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating note', error: err });
        }
        res.status(200).json({ message: 'Note updated successfully' });
    });
};

const deleteNote = (req, res) => {
    const { id } = req.params;
    Note.deleteNote(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting note', error: err });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    });
};

module.exports = { createNote, getAllNotes, getNote, updateNote, deleteNote };