'use strict'

import emailList from '../cmps/email-list.cmp.js';
import emailHeader from '../cmps/email-header.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailService from '../services/email-service.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    
    template: `
    <section class="email-app">
        <email-header @clearSearch="clearSearch" @searchBy="searchEmails"></email-header>
        <email-nav @openCompose="openCompose"></email-nav>
        <router-view :emails="emails"></router-view>
        <email-compose @emailSent="sendEmailAndClose" @closeCompose="saveDraftAndClose" v-if="showCompose"></email-compose>
    </section>
    `,

    data() {
        return {
            emails: [],
            filterAndSortParams: {
                searchParams: {subject: '', content: ''},
                filter: 'all',
                sort: ''
            },
            showCompose: false
        }
    },
    created() {
        console.log('Email is alive');
        this.clearSearch();
        // const filterFolder = this.$route.params.;
    }, 

    methods: {
        searchEmails(searchParams) {
            this.$router.push('/email/inbox');
            this.filterAndSortParams.searchParams = searchParams;
            this.updateEmails();
        },
        
        updateEmails() {
            emailService.query(this.filterAndSortParams)
            .then((emails) => {this.emails = emails})
        },

        clearSearch() {
            this.filterAndSortParams.searchParams = {subject: '', content: ''};
            emailService.query()
            .then((emails) => {this.emails = emails})
        },

        sendEmailAndClose(newEmail) {
            this.showCompose = false;
            emailService.sendEmail(newEmail.from, newEmail.to, newEmail.subject, newEmail.body)
            .then(newEmailId => {})
        },

        saveDraftAndClose(newDraft) {
            this.showCompose = false;
            if (!newDraft.subject && !newDraft.body) return;
            emailService.addDraft(newDraft.from, newDraft.to, newDraft.subject, newDraft.body)
            .then(newDraftId => {})
        },

        openCompose() {
            this.showCompose = true;
        }
    },

    components: {
        emailList,
        emailHeader,
        emailNav,
        emailCompose
    }
}


