const db = require('../config/db');

const addNote = (title, datetime, note, callback) => {
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(query, [title, datetime, note], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results.insertId);
    });
};

const getAllNotes = (callback) => {
    const query = 'SELECT * FROM notes';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

const getNoteById = (id, callback) => {
    const query = 'SELECT * FROM notes WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0]);
    });
};

const updateNote = (id, title, datetime, note, callback) => {
    const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(query, [title, datetime, note, id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

const deleteNote = (id, callback) => {
    const query = 'DELETE FROM notes WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = { addNote, getAllNotes, getNoteById, updateNote, deleteNote };