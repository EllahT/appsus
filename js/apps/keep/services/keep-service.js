'use-strict';

export default {
    query,
    updateColor,
    getById,
    addNote,
    // editNote,
    deleteNote,
    deleteTodo,
    changeIsDone,
    togglePin
}

const NOTES_KEY = 'notes';

import utilService from '../../../services/util.service.js'
import storageService from '../../../services/storage.service.js'

const fakeNotes = [
    {
        id: 'stamMashu',
        type: 'txt',
        content: 'Remember that your nose and ears are constantly growing',
        color: '#63f0e2',
        isPinned: false
    },
    {
        id: 'otherMashu',
        type: 'todo',
        content: [{text: 'Stay hungry', isDone: false, id: 'thebestid'},{text: 'Stay foolish', isDone: false, id: 'thesecondbestid'}],
        color: '#fafa34',
        isPinned: false
    },
    {
        id: 'odMashu',
        type: 'img',
        content: 'http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-17.jpg',
        color: '#965bd1',
        isPinned: true
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

function addNote(type, color, content) {
    let newNote = {
        id: utilService.makeId(),
        type: type,
        color: color,
        content: content,
        created: getDateAndTime()
    }
    notes.unshift(newNote);
    storageService.store(NOTES_KEY, notes);

}

function deleteNote(noteId) {
    const noteIdx = notes.findIndex(note => note.id === noteId);
    notes.splice(noteIdx, 1);
    storageService.store(NOTES_KEY, notes);

    // return Promise.resolve(noteId)
}

// for editing the note in real time with the tools
function editNoteContent() {

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

function addTodo(newTodo, noteId) {
    newTodo.id = utilService.makeId()
    const note = notes.find(note => note.id === noteId);
    let todos = note.content;
    todos.push(newTodo);
    storageService.store(NOTES_KEY, notes);
}

function deleteTodo(todoId, noteId) {
    const note = notes.find(note => note.id === noteId);
    let todos = note.content;
    const todoIdx = todos.findIndex(todo => { todo.id === todoId })
    todos.splice(todoIdx, 1);
    storageService.store(NOTES_KEY, notes);
}

// addTodo() {
//     console.log('soon adding to do');
//     console.log(this.newTodo);
//     this.newTodo.id = utilService.makeId();
//     console.log(this.newTodo.id);

//     this.todos.push(this.newTodo)
// },
// deleteTodo(todoId) {
//     const todoIdx = this.todos.findIndex((todo) => { todo.id === todoId })
//     this.todos.splice(todoIdx, 1);
// },
// ifChecked(todoId) {
//     const todoIdx = this.todos.findIndex((todo) => { todo.id === todoId })

// }
function getDateAndTime() {
    let timeStamp = new Date();
    return {timeStamp: timeStamp.getTime(), year: timeStamp.getFullYear(), month: timeStamp.getMonth()+1, day: timeStamp.getDate(), hours: timeStamp.getHours(), minutes: timeStamp.getMinutes(), strDate: timeStamp.toDateString()}
}

function changeIsDone(todoId, noteId) {
    const note = notes.find(note => note.id === noteId);
    let todos = note.content;
    const todo = todos.find(todo => todo.id === todoId);
    console.log(todo);
    
    todo.isDone = !todo.isDone;
    storageService.store(NOTES_KEY, notes);
}

function togglePin(noteId) {
    const note = notes.find(note => note.id === noteId);
    note.isPinned = !note.isPinned;
    storageService.store(NOTES_KEY, notes);
}