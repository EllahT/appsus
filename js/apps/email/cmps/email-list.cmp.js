'use strict'

import emailService from '../services/email-service.js';
import emailPreview from '../cmps/email-preview.cmp.js';
import eventBus, {NOTE_MAIL_CONTENT} from '../../../services/event-bus.service.js';

export default {
    template: `
        <section class="email-list-container">
            <ul class="email-list">
                <li class="email-item" v-for="email in emails" :key="email.id" 
                    :class="{'unread-item-container' : !email.isRead}"
                    @click="openEmail(email.id)">
                    <span v-if="filter !== 'drafts' && filter !== 'sent'" class="email-envelope" :class="imageForDisplay(email.isRead)" @click.stop="toggleReadEmail(email.id)"></span>
                    <span class="far fa-sticky-note email-note" @click.stop="noteThisMail(email)"></span>
                    <span class="fa fa-star star" :class="{'active-star': email.isStarred}" @click.stop="toggleStarEmail(email.id)"></span>
                    <email-preview :filter="filter" :email="email" @deleteEmail="deleteEmail">
                    </email-preview>
                </li>
            </ul>
        </section>
    `,

    props: ['emails', 'filter'],
    
    methods: {
        toggleStarEmail(emailId) {
            emailService.toggleStarEmail(emailId);
        }, 
        
        toggleReadEmail(emailId) {
            emailService.toggleReadEmail(emailId);
        },
        
        imageForDisplay(isRead) {
            return (isRead)? 'fas fa-envelope-open' : 'fas fa-envelope';
        },

        openEmail(emailId) {
            if (this.filter === 'drafts') {
                this.openDraft(emailId)

            } else {
                emailService.openEmail(emailId);
                this.$router.push('/email/'+emailId);
            }
        }, 

        deleteEmail(emailId) {
            this.$emit('deleteEmail',emailId);
        },

        openDraft(emailId) {
            this.$emit('openDraft',emailId);
        },

        noteThisMail(email) {
            setTimeout(() => {
                eventBus.$emit(NOTE_MAIL_CONTENT,email);
            },100)
            this.$router.push('/keep');
        }

    },

    watch: { 
        'filter': {
            handler: function(filter) {
                this.$emit('filtered',filter);
           },
           immediate: true
         }
   },

    components: {
        emailPreview
    }
}