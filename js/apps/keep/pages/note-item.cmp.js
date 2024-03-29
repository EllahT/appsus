'use-strict';

import keepService from '../services/keep-service.js';
import imgDisplay from '../cmps/img-display.cmp.js';
import todosDisplay from '../cmps/todos-display.cmp.js';
import noteTools from '../cmps/note-tools.cmp.js';
import todoItem from '../cmps/todo-item.cmp.js';
import videoDisplay from '../cmps/video-display.cmp.js';
import audioDisplay from '../cmps/audio-display.cmp.js';
import editTodos from '../cmps/edit-todos.cmp.js';
import eventBus, { SHOW_MSG, COMPOSE_MAIL_CONTENT } from '../../../services/event-bus.service.js';

export default {
    template: `
        <li :style="{'background-color': bgcolor}" class="note-item">
            <note-tools :note="note" @composeEmail="composeEmail" @editIsClicked="openEdit" @toggledPin="togglePin" @changedColor="changeColor" @deletedNote="deleteNote(note.id)"></note-tools>
            <edit-todos v-if="editClicked" :note="note"></edit-todos>
            <div class="content-display">
                <p contenteditable="true" @mouseout="changeTextContent" class="note-txt" v-if="note.type === 'txt'">{{note.content}}</p>
                <todos-display v-else-if="note.type === 'todo'" :note="note"></todos-display>
                <img-display v-else-if="note.type === 'img'" :content="note.content"></img-display>
                <video-display v-else-if="note.type === 'video'" :content="note.content"></video-display>
                <audio-display v-else="note.type === 'audio'" :content="note.content"></audio-display>
            </div>
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
            editClicked: false
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
            eventBus.$emit(SHOW_MSG, {txt: 'your note has been deleted!', type: 'failure'});
        },
        deleteTodo(todoId, noteId) {
            keepService.deleteTodo(todoId, noteId);
            eventBus.$emit(SHOW_MSG, {txt: 'your todo has been deleted!', type: 'failure'});
        },
        togglePin(noteId) {
            keepService.togglePin(noteId);
        },
        openEdit() {
            this.editClicked = !this.editClicked;
        },
        changeTextContent(ev){
            this.note.content = ev.path[0].innerText;
            keepService.updateTextContent(this.note.id, this.note.content);
        },
        composeEmail(content) {
            setTimeout(() => {
                eventBus.$emit(COMPOSE_MAIL_CONTENT,content);
            },100)
            this.$router.push('/email/inbox');
        }

    },
    computed: {
        isTodos() {
            return this.note.type === 'todo'
        },
    },
    props: ['note'],
    components: {
        noteTools,
        todoItem,
        imgDisplay,
        todosDisplay,
        videoDisplay,
        audioDisplay,
        editTodos
    }
}