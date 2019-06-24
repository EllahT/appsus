'use-strict';

import keepService from '../services/keep-service.js';
import noteText from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteAudio from './note-audio.cmp.js';

export default {
    template: `
    <section class="new-note-editor">
        <form action="#" @submit.prevent="addNewNote">
            
            <button class="fas fa-font" @click.prevent="setType('txt')"></button>
            <button class="far fa-image" @click.prevent="setType('img')"></button>
            <button class="fas fa-tasks" @click.prevent="setType('todo')"></button>
            <button class="fab fa-youtube" @click.prevent="setType('video')"></button>
            <button class="fas fa-microphone" @click.prevent="setType('audio')"></button>

            <div class="new-notes-types">
                <note-text :content="note.content" @contentChanged="changeContent" v-if="note.type === 'txt'"></note-text>
                <note-img @imgNoteChanged="changeContent" v-else-if="note.type === 'img'"></note-img>
                <note-video @videoNoteChanged="changeContent" v-else-if="note.type === 'video'"></note-video>
                <note-todos :content="note.content" @newTodosChanged="changeContent" v-else-if="note.type === 'todo'"></note-todos>
                <note-audio @audioNoteChanged="changeContent" v-else="note.type === 'audio'"></note-audio>
            </div>
            
            
            <input type="button" class="clr-circle yellow" @click="setClr"/>
            <input type="button" class="clr-circle purple" @click="setClr"/>
            <input type="button" class="clr-circle turquoise" @click="setClr"/>
            <button class="fas fa-thumbtack" @click="togglePin"></button>
            <button type="submit" class="fas fa-sticky-note"></button>
        </form>
    </section>
    `,
    data() {
        return {
            note: {
                type: 'txt',
                color: '#fdfdc4',
                content: '',
                time: '',
                isPinned: false
            }
        }
    },
    methods: {
        setClr(ev) {
            if (ev.target.classList.contains('yellow')) this.note.color = '#fdfdc4';
            if (ev.target.classList.contains('purple')) this.note.color = '#d8bef3';
            if (ev.target.classList.contains('turquoise')) this.note.color = '#ccffec';
        },
        
        addNewNote() {            
            keepService.addNote(this.note.type, this.note.color, this.note.content, this.note.isPinned);
            this.note = {
                type: 'txt',
                color: '#fdfdc4',
                content: '',
                time: '',
                isPinned: false
            }
        },
        setType(val) {
            this.note.type = val;
        },
        changeContent(content) {
            this.note.content = content;
        },
        togglePin() {
            this.note.isPinned = !this.note.isPinned;
        }
    },
    computed: {
        pinnedImg() {
            if (this.note.isPinned) return 'Unpin';
            else return 'Pin'
        }
    },
    components: {
        noteText,
        noteTodos,
        noteImg,
        noteVideo,
        noteAudio
    }
}