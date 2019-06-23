'use-strict';

import keepService from '../services/keep-service.js';
import imgDisplay from '../cmps/img-display.cmp.js';
import todosDisplay from '../cmps/todos-display.cmp.js';
import noteTools from '../cmps/note-tools.cmp.js';
import todoItem from '../cmps/todo-item.cmp.js';
import videoDisplay from '../cmps/video-display.cmp.js';

export default {
    template: `
        <li :style="{'background-color': bgcolor}" class="note-item">
            <p class="note-txt" v-if="note.type === 'txt'">{{note.content}}</p>
            <todos-display v-else-if="note.type === 'todo'" :note="note"></todos-display>
            <img-display v-else-if="note.type === 'img'" :content="note.content"></img-display>
            <video-display v-else="note.type === 'video'" :content="note.content"></video-display>
            <note-tools :note="note" @toggledPin="togglePin" @changedColor="changeColor" @deletedNote="deleteNote(note.id)"></note-tools>
        </li>
    `,
    created() {
        // const noteId = this.$route.params.theNoteId;
        // keepService.getById(noteId)
        //     .then(note => this.note = note)
    },
    data() {
        return {
            bgcolor: this.note.color,
        }
    },
    methods: {
        changeColor(color) {
            this.bgcolor = color;
            this.updateColor(this.note.id, color);
        },
        updateColor(noteId, color) {
            keepService.updateColor(noteId, color)
        },
        deleteNote(noteId) {
            keepService.deleteNote(noteId);
        },
        deleteTodo(todoId, noteId) {
            keepService.deleteTodo(todoId, noteId);
        },
        togglePin(noteId) {
            keepService.togglePin(noteId);
        }

    },
    computed: {
        isTodos() {
            return note.type === 'todo'
        }
    },
    props: ['note'],
    components: {
        noteTools,
        todoItem,
        imgDisplay,
        todosDisplay,
        videoDisplay
    }
}