'use-strict';

import keepService from '../services/keep-service.js'
import noteText from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'

export default {
    template: `
    <section>
        <h1>Where new Notes Happen.</h1>
        <form action="#" @submit.prevent="addNewNote(note.type, note.color, note.content)">
            
            <input type="button" value="txt" @click="setType"/>
            <input type="button" value="img" @click="setType"/>
            <input type="button" value="todo" @click="setType"/>

            <note-text :content="note.content" @contentChanged="changeContent" v-if="note.type === 'txt'"></note-text>
            <note-img @imgNoteAdded="changeContent" v-else-if="note.type === 'img'"></note-img>
            <note-todos :content="note.content" @contentChanged="changeContent" v-else="note.type === 'todo'"></note-todos>
            
            <!-- <button class="showColors">to do: btn to open colors menu</button> -->
            <input type="button" class="clr-circle yellow" @click="setClr"/>
            <input type="button" class="clr-circle purple" @click="setClr"/>
            <input type="button" class="clr-circle turquoise" @click="setClr"/>
            <button type="submit">+</button>



        </form>
    </section>
    `,
    data() {
        return {
            note: {
                type: '',
                color: '#fafa34',
                content: '',
                time: ''
            }
        }
    },
    methods: {
        setClr(ev) {
            if (ev.target.classList.contains('yellow')) this.note.color = '#fafa34';
            if (ev.target.classList.contains('purple')) this.note.color = '#965bd1';
            if (ev.target.classList.contains('turquoise')) this.note.color = '#63f0e2';
        },
        addNewNote(content) {
            keepService.addNote(this.note.type, this.note.color, content)
        },
        doSomething() {
            console.log('editing text');
            
        },
        setType(ev) {
            if (ev.target.value === 'txt') this.note.type = 'txt';
            if (ev.target.value === 'img') this.note.type = 'img';
            if (ev.target.value === 'todo') this.note.type = 'todo';
        },
        changeContent(content) {
            console.log('content changed');
            console.log(this.note.content, content);
            
            this.note.content = content;
        },
    },
    computed: {
        // addNote(type, color, content, time)
    },
    components: {
        noteText,
        noteTodos,
        noteImg
    }
}