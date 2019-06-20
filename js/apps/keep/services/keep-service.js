'use-strict';

import makeId from '../services/util.service.js'

let notes = [{
    id: 'stamMashu',
    type: txt,
    content: 'I have to work',
    color: torquoise,
    isPinned: false
}]

function createNotes() {

}

function addNote(type, color, content, time) {
    let newNote = {
        id: makeId(),
        type: type,
        color: color,
        content: content,
        created: time
    }
    notes.unshift(newNote);
}



function deleteNote() {

}

// for editing the note in real time with the tools
function updateNote() {

}

function getById() {

}

function getNotes() {

}

export default {
    updateNote,
    getById,
    addNote,
    deleteNote,
    getNotes
}