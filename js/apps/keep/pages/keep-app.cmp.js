'use-strict';

import keepService from '../services/keep-service.js'
import notesList from '../cmps/notes-list.cmp.js'


export default {
    template: `
    <section>
    <h1>Whassssup keep</h1>    
    <!-- <p>{{notes}}</p> -->
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
        notesList
    }

}