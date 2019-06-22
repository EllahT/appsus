'use-strict';

import keepService from '../services/keep-service.js'
import noteText from '../cmps/note-txt.cmp.js'
import imgDisplay from '../cmps/img-display.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import noteTools from '../cmps/note-tools.cmp.js'
import todoItem from '../cmps/todo-item.cmp.js'

export default {
    template: `
        <li :style="{'background-color': bgcolor}" class="note-item">
            <p v-if="note.type === 'txt'">{{note.content}}</p>
            <p v-else-if="note.type === 'todo'">
                <ul>
                    <todo-item @deletingTodo="deleteTodo" :class="toggleChecked" v-for="currTodo in note.content" :todo="currTodo" :key="currTodo.id"></todo-item>
                </ul>
            </p>
            <img-display :content="note.content" v-else-if="note.type === 'img'"></img-display>
            <note-tools @changedColor="changeColor" @deletedNote="deleteNote(noteId)"></note-tools>
        </li>
    `,
    created() {
        console.log('note item is alive');
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
        imgDisplay
    }
}