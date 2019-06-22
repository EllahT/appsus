'use strict'

import emailList from '../cmps/email-list.cmp.js';
import emailHeader from '../cmps/email-header.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailService from '../services/email-service.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    
    template: `
    <section class="email-app">
        <email-header 
            @clearSearch="clearSearch" 
            @searchBy="searchEmails" 
            @filtered="filterEmails" 
            :isOptionFilterOn="isOptionFilterOn"
            @sorted="sortEmails">
        </email-header>
        
        <email-nav @openCompose="openCompose"></email-nav>
        
        <router-view :emails="emails" 
            @filtered="filterEmails" 
            @openDraft="openDraft"
            @replyEmail="replyEmail"></router-view>
        
        <email-compose 
            :draft="draft"
            :reply="reply"
            @emailSent="sendEmailAndClose" 
            @closeCompose="saveDraftAndClose" 
            v-if="showCompose"></email-compose>
    </section>
    `,

    data() {
        return {
            emails: [],
            filterAndSortParams: {
                searchParams: {subject: '', content: ''},
                filter: 'all',
                sort: {by: 'Sent at', op: '+'}
            },
            isOptionFilterOn: true,
            showCompose: false,
            draft: '',
            reply: ''
        }
    },
    created() {
        console.log('Email is alive');
        this.clearSearch();
    }, 

    methods: {
        searchEmails(searchParams) {
            this.$router.push('/email/inbox');
            this.filterAndSortParams.searchParams = searchParams;
            this.updateEmails();
        },

        filterEmails(filter) {
            if (filter === 'read' || filter === 'unread'|| filter === 'all') {
                this.isOptionFilterOn = true;
                this.$router.push('/email/inbox');
            } else {
                this.isOptionFilterOn = false;
            }
            this.filterAndSortParams.filter = filter;
            this.updateEmails();
        },

        sortEmails(sorter) {
            this.filterAndSortParams.sort = sorter;
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
            .then(newEmailId => {
                this.updateEmails();
            })
        },

        saveDraftAndClose(newDraft) {
            this.showCompose = false;
            if (!newDraft.subject && !newDraft.body) return;
            emailService.addDraft(newDraft.from, newDraft.to, newDraft.subject, newDraft.body)
            .then(newDraftId => {
                this.updateEmails();
            })
        },

        openCompose() {
            this.showCompose = true;
        },

        openDraft(dratfId) {
            emailService.getEmailById(dratfId)
            .then(draft => {
                this.draft = draft;
                this.showCompose = true;
                emailService.deleteEmail(dratfId);
            })
        },

        replyEmail(email) {
            this.reply = email;
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


