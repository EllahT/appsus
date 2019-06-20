'use strict'

import emailList from '../cmps/email-list.cmp.js';
import emailHeader from '../cmps/email-header.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailService from '../sevices/email-service.js';

export default {
    
    template: `
    <section class="email-app">
        <email-header @clearSearch="clearSearch" @searchBy="searchEmails"></email-header>
        <email-nav></email-nav>
        <email-list :emails="emails"></email-list>
    </section>
    `,

    data() {
        return {
            emails: [],
            filterAndSortPrms: {
                searchPrms: {subject: '', content: ''},
                filter: 'all',
                sort: ''
            }
        }
    },
    created() {
        console.log('Email is alive');
        this.clearSearch();
    }, 

    methods: {
        searchEmails(searchPrms) {
            this.filterAndSortPrms.searchPrms = searchPrms;
            this.updateEmails();
        },
        
        updateEmails() {
            emailService.query(this.filterAndSortPrms)
            .then((emails) => {this.emails = emails})
        },

        clearSearch() {
            this.filterAndSortPrms.searchPrms = {subject: '', content: ''};
            emailService.query()
            .then((emails) => {this.emails = emails})
        }
    },

    components: {
        emailList,
        emailHeader,
        emailNav
    }
}

