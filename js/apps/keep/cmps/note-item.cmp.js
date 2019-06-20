'use-strict';

import noteText from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteTools from './note-tools.cmp.js'

export default {
    template: `
    <div>
        <li class="note-item" :content="note.content">
            <note-text v-if="note.type === 'txt'"></note-text>
            <note-img v-if="note.type === 'img'"></note-img>
            <note-todos v-if="note.type === 'todo'"></note-todos>
            <note-tools></note-tools>
        </li>
    </div>
    `,
    created() {
        console.log('note item is alive');
        
    },
    data() {
        return {

        }
    },
    methods: {
        changeColor() {

        }
    },
    computed: {
        checkColor() {

        }
    },
    props: ['note'],
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteTools
    }
}