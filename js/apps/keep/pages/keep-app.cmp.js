'use-strict';

import keepService from '../services/keep-service.js';
import notesList from './notes-list.cmp.js';
import keepHeader from '../cmps/keep-header.cmp.js';
import addNew from '../cmps/add-new.cmp.js';
import pinnedNotes from '../cmps/pinned-notes.cmp.js';
import eventBus, {NOTE_MAIL_CONTENT} from '../../../services/event-bus.service.js';

export default {
    template: `
    <section>
        <keep-header
            @clearSearch="clearSearch" 
            @searchBy="searchNotes" 
            @filtered="filterNotes" 
            @sorted="sortNotes">
        </keep-header>
        <div class="app-main">
            <pinned-notes :notes="notes"></pinned-notes>
            <add-new :notes="notes" class="add-new"></add-new>    
            <notes-list :notes="notes"></notes-list>
        </div>
    </section>
    `,
    created() {
        console.log('Keep is alive');
        keepService.query()
            .then(notes => this.notes = notes);
    },

    mounted() {
        eventBus.$on(NOTE_MAIL_CONTENT, (email)=> {
            let content = email.subject + '\n' + email.body;
            keepService.addNote('txt', '#fafa34', content , false);
        })
    },

    data() {
        return {
            notes: [],
            filterAndSortParams: {
                searchParam: '',
                filter: 'all',
                sort: {by: 'Created', op: '-'}
            }
        }
    },

    methods: {
        searchNotes(searchParam) {
            this.filterAndSortParams.searchParam = searchParam;
            this.updateNotes();
        },

        filterNotes(filter) {
            let filterToSend
            switch (filter) {
                case 'text': 
                    filterToSend = 'txt';
                    break;
                case 'image': 
                    filterToSend = 'img';
                    break;
                case 'todos': 
                    filterToSend = 'todo';
                    break;
                case 'video': 
                    filterToSend = 'video';
                    break;
            }
            this.filterAndSortParams.filter = filterToSend;
            this.updateNotes();
        },

        sortNotes(sorter) {
            this.filterAndSortParams.sort = sorter;
            this.updateNotes();
        },
        
        updateNotes() {
            keepService.query(this.filterAndSortParams)
            .then((notes) => {
                this.notes = notes})
        },

        clearSearch() {
            this.filterAndSortParams.searchParam = '';
            keepService.query()
            .then((notes) => {this.notes = notes})
        },
    },

    destroyed() {
        eventBus.$off(NOTE_MAIL_CONTENT, this.listener);
    },
  
    components: {
        notesList,
        keepHeader,
        addNew,
        pinnedNotes
    }

}