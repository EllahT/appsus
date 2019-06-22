'use-strict';

import keepService from '../services/keep-service.js'

export default {
    template: `
    <section>
        <h1>Where new Notes Happen. Which is soon.</h1>
        <form action="#" @submit.prevent="addNewNote(note.type, note.color, note.content, note.time)">
            
            <input type="text" v-model="note.content" @input="doSomething"/>
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
            keepService.addNote(this.note.type, this.note.color, this.note.content, this.note.time)
        },
        doSomething() {
            console.log('is this thing on');
            
        }
    },
    computed: {
        // addNote(type, color, content, time)
    }
}