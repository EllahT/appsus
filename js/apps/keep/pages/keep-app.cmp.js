'use-strict';

import keepService from '../services/keep-service.js'
import notesList from '../cmps/notes-list.cmp.js'
import keepHeader from '../cmps/keep-header.cmp.js'
import addNew from '../cmps/add-new.cmp.js'

export default {
    template: `
    <section>
        <keep-header></keep-header>
        <h1>Whassssup keep</h1>
        <add-new class="add-new"></add-new>    
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
    components: {
        notesList,
        keepHeader,
        addNew
    }

}