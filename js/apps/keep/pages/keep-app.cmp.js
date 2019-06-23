'use-strict';

import keepService from '../services/keep-service.js'
import notesList from './notes-list.cmp.js'
import keepHeader from '../cmps/keep-header.cmp.js'
import addNew from '../cmps/add-new.cmp.js'
import pinnedNotes from '../cmps/pinned-notes.cmp.js'

export default {
    template: `
    <section>
        <keep-header></keep-header>
        <h1>Whassssup keep</h1>
        <pinned-notes :notes="notes"></pinned-notes>
        <add-new :notes="notes" class="add-new"></add-new>    
        <notes-list :notes="notes"></notes-list>
    </section>
    `,
    created() {
        console.log('Keep is alive');
        keepService.query()
            .then(notes => this.notes = notes);
    },
    data() {
        return {
            notes: []
        }
    },

    computed: {
        
    },
  
    components: {
        notesList,
        keepHeader,
        addNew,
        pinnedNotes
    }

}