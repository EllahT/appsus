'use-strict';

import keepService from '../services/keep-service.js'
import noteText from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteTools from './note-tools.cmp.js'

export default {
    template: `
        <li :style="{'background-color': bgcolor}" class="note-item">
            <note-text :content="note.content" v-if="note.type === 'txt'"></note-text>
            <note-img :content="note.content" v-else-if="note.type === 'img'"></note-img>
            <note-todos :content="note.content" v-else="note.type === 'todo'"></note-todos>
            <note-tools @changedColor="changeColor"></note-tools>
        </li>
    `,
    created() {
        console.log('note item is alive');

    },
    data() {
        return {
            bgcolor: this.note.color
        }
    },
    methods: {
        changeColor(color) {
            this.bgcolor = color;
            this.updateColor(this.note.id, color);
        },
        updateColor(noteId, color) {
            keepService.updateColor(noteId, color)
        }
    },
    computed: {

    },
    props: ['note'],
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteTools,
    }
}