'use-strict';

import noteItem from './note-item.cmp.js'

export default {
    template: `
    <section>
        <ul class="notes-container">
            <note-item v-if="!currNote.isPinned" v-for="currNote in notes" :note="currNote" :key="currNote.id"></note-item>      
        </ul>
    </section>
    `,
    props: ['notes'],
    data() {
        return {

        }
    },
    methods: {},
    components: {
        noteItem
    }
}