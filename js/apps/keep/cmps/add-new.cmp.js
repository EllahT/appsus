'use-strict';

import keepService from '../services/keep-service.js';
import noteText from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';

export default {
    template: `
    <section>
        <h1>Where new Notes Happen.</h1>
        <form action="#" @submit.prevent="addNewNote">
            
            <input type="button" value="txt" @click="setType"/>
            <input type="button" value="img" @click="setType"/>
            <input type="button" value="todo" @click="setType"/>
            <input type="button" value="video" @click="setType"/>

            <note-text :content="note.content" @contentChanged="changeContent" v-if="note.type === 'txt'"></note-text>
            <note-img @imgNoteChanged="changeContent" v-else-if="note.type === 'img'"></note-img>
            <note-video @videoNoteChanged="changeContent" v-else-if="note.type === 'video'"></note-video>
            <note-todos :content="note.content" @newTodosChanged="changeContent" v-else="note.type === 'todo'"></note-todos>
            
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
                type: 'txt',
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
        
        addNewNote() {
            console.log(this.note);
            
            keepService.addNote(this.note.type, this.note.color, this.note.content, this.note.isPinned);
            this.note = {
                type: 'txt',
                color: '#fafa34',
                content: '',
                time: '',
                isPinned: false
            }
        },
        
        doSomething() {
            console.log('editing text');
            
        },

        setType(ev) {
            this.note.type = ev.target.value;
        },
        
        changeContent(content) {
            this.note.content = content;
        },
    },

    components: {
        noteText,
        noteTodos,
        noteImg,
        noteVideo
    }
}