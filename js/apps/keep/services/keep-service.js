'use-strict';

export default {
    query,
    // updateNote,
    // getById,
    // addNote,
    // deleteNote,
}

const NOTES_KEY = 'notes';

import utilService from '../../../services/util.service.js'
import storageService from '../../../services/storage.service.js'

const fakeNotes = [
    {
        id: 'stamMashu',
        type: 'txt',
        content: 'I have to work',
        color: '#63f0e2',
        isPinned: false
    },
    {
        id: 'otherMashu',
        type: 'todo',
        content: 'I have to study',
        color: '#fafa34',
        isPinned: false
    }
]

let notes;

function query() {
    let updatedNotes;
    if (!notes) updatedNotes = storageService.load(NOTES_KEY);
    if (!updatedNotes || !updatedNotes.length) {
        updatedNotes = fakeNotes;
        storageService.store(NOTES_KEY, updatedNotes)
    }

    // insert checking filter here
    return Promise.resolve(updatedNotes);
}

function addNote(type, color, content, time) {
    let newNote = {
        id: utilService.makeId(),
        type: type,
        color: color,
        content: content,
        created: time
    }
    notes.unshift(newNote);
}

function deleteNote(noteId) {

}

// for editing the note in real time with the tools
function updateNote() {

}

function getById(noteId) {
    const note = notes.find(note => note.id === noteId);
    return note;
}

function setFilter() {

}