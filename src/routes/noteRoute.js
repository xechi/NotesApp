const express = require('express');
const { createNote, getAllNotes, getNote, updateNote, deleteNote } = require('../controllers/noteController');

const router = express.Router();

router.post('/notes', createNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;