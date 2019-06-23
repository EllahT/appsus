'use-strict';

import keepService from '../services/keep-service.js'
import notesList from './notes-list.cmp.js'
import keepHeader from '../cmps/keep-header.cmp.js'
import addNew from '../cmps/add-new.cmp.js'
import pinnedNotes from '../cmps/pinned-notes.cmp.js'

export default {
    template: `
    <section>
        <keep-header
            @clearSearch="clearSearch" 
            @searchBy="searchNotes" 
            @filtered="filterNotes" 
            @sorted="sortNotes">
        </keep-header>
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
            notes: [],
            filterAndSortParams: {
                searchParam: '',
                filter: 'All',
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
            this.filterAndSortParams.filter = filter;
            this.updateNotes();
        },

        sortNotes(sorter) {
            this.filterAndSortParams.sort = sorter;
            this.updateNotes();
        },
        
        updateNotes() {
            keepService.query(this.filterAndSortParams)
            .then((notes) => {this.notes = notes})
        },

        clearSearch() {
            this.filterAndSortParams.searchParam = '';
            emailService.query()
            .then((notes) => {this.notes = notes})
        },
    },
  
    components: {
        notesList,
        keepHeader,
        addNew,
        pinnedNotes
    }

}