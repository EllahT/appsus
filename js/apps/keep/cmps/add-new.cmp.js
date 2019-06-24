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
            <h1>Make a new note happen.</h1>
        <div class="type-btns">
            <button class="fas fa-font round-btn" @click.prevent="setType('txt')"></button>
            <button class="far fa-image round-btn" @click.prevent="setType('img')"></button>
            <button class="fas fa-tasks round-btn" @click.prevent="setType('todo')"></button>
            <button class="fab fa-youtube round-btn" @click.prevent="setType('video')"></button>
            <button class="fas fa-microphone round-btn" @click.prevent="setType('audio')"></button>
        </div>

        <div class="new-notes-types" :style="{'background-color': note.color}">
            <note-text :content="note.content" @contentChanged="changeContent" v-if="note.type === 'txt'"></note-text>
            <note-img @imgNoteChanged="changeContent" v-else-if="note.type === 'img'"></note-img>
            <note-video @videoNoteChanged="changeContent" v-else-if="note.type === 'video'"></note-video>
            <note-todos :content="note.content" @newTodosChanged="changeContent" v-else-if="note.type === 'todo'"></note-todos>
            <note-audio @audioNoteChanged="changeContent" v-else="note.type === 'audio'"></note-audio>
        </div>
            
            <div class="new-note-tools">
                <button @click.prevent="toggleClrs" class="round-btn"><i class="fas fa-tint"></i></button>
                <button class="round-btn fas fa-thumbtack" @click.prevent="togglePin"></button>
                <button type="submit" class="round-btn fas fa-plus"></button>
                <div v-if="isShowClrs">
                    <input type="button" class="clr-circle yellow" @click="setClr"/>
                    <input type="button" class="clr-circle purple" @click="setClr"/>
                    <input type="button" class="clr-circle turquoise" @click="setClr"/>
                </div>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            isShowClrs: false,
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
        },
        toggleClrs() {
            this.isShowClrs = !this.isShowClrs
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