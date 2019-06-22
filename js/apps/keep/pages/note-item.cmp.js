'use-strict';

import keepService from '../services/keep-service.js'
import imgDisplay from '../cmps/img-display.cmp.js'
import todosDisplay from '../cmps/todos-display.cmp.js'
import noteTools from '../cmps/note-tools.cmp.js'
import todoItem from '../cmps/todo-item.cmp.js'

export default {
    template: `
        <li :style="{'background-color': bgcolor}" class="note-item">
            <p v-if="note.type === 'txt'">{{note.content}}</p>
            <todos-display :note="note" v-else-if="note.type === 'todo'"></todos-display>
            <img-display :content="note.content" v-else-if="note.type === 'img'"></img-display>
            <note-tools @changedColor="changeColor" @deletedNote="deleteNote(noteId)"></note-tools>
        </li>
    `,
    created() {
        console.log('note item is alive');
        console.log(this.note.type, this.note);
        
        // const noteId = this.$route.params.theNoteId;
        // keepService.getById(noteId)
        //     .then(note => this.note = note)
    },
    data() {
        return {
            bgcolor: this.note.color,
            noteId: this.note.id,
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
            console.log('item to delete:', noteId);
            keepService.deleteNote(noteId);
        },
        deleteTodo(todoId, noteId) {
            keepService.deleteTodo(todoId, noteId);
        },
        toggleChecked(todoId) {

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
        todosDisplay
    }
}