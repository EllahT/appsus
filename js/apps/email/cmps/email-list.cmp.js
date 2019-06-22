'use strict'

import emailService from '../services/email-service.js';
import emailPreview from '../cmps/email-preview.cmp.js';

export default {
    template: `
        <section class="email-list-container">
            <ul class="email-list">
                <li class="email-item" v-for="email in emails" :key="email.id" 
                    :class="{'unread-item-container' : !email.isRead}"
                    @click="openEmail(email.id)">
                    <span class="email-envelope" :class="imageForDisplay(email.isRead)" @click.stop="toggleReadEmail(email.id)"></span>
                    <span class="fa fa-star star" :class="{'active-star': email.isStarred}" @click.stop="toggleStarEmail(email.id)"></span>
                    <email-preview :email="email" @deleteEmail="deleteEmail"></email-preview>
                </li>
            </ul>
        </section>
    `,

    props: ['emails'],

    created() {
        console.log(this.emails)
    },
    
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
            emailService.openEmail(emailId);
            this.$router.push('/email/'+emailId);
        }, 

        deleteEmail(emailId) {
            emailService.deleteEmail(emailId);
        }
    },

    components: {
        emailPreview
    }
}