'use-strict';

export default {
    query,
    updateColor,
    getById,
    addNote,
    // updateNote,
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
    // let updatedNotes;
    if (!notes) notes = storageService.load(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = fakeNotes;
        storageService.store(NOTES_KEY, notes)
    }

    // insert checking filter here
    return Promise.resolve(notes);
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
    storageService.store(NOTES_KEY, notes);

}

function deleteNote(noteId) {

}

// for editing the note in real time with the tools
function updateNoteContent() {

}

function updateColor(noteId, color) {
    if (!notes) {
        query()
            .then((notesTemp) => {
                let note = notesTemp.find(note => note.id === noteId);
                note.color = color;
                notes = notesTemp;
                storageService.store(NOTES_KEY, notes);
            })
    } else {
        let note = notes.find(note => note.id === noteId);
        note.color = color;
        storageService.store(NOTES_KEY, notes);
    }
}

function getById(noteId) {
    if (!notes) {
        query()
            .then(() => {
                const note = notes.find(note => note.id === noteId);
                return Promise.resolve(note);
            })
    }
    else {
        const note = notes.find(note => note.id === noteId);
        return Promise.resolve(note);
    }
}

function setFilter() {

}