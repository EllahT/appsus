'use strict'

import emailService from '../sevices/email-service.js';
import emailPreview from '../cmps/email-preview.cmp.js';

export default {
    template: `
        <section class="email-list-container">
            <ul class="email-list">
                <li class="email-item" v-for="email in emails" :key="email.id"  :class="{'read-item-container' : !email.isRead}">
                    <img class="email-envelope" :src="imageForDisplay(email.isRead)" @click.stop="toggleReadEmail(email.id)"/>
                    <span class="star fa fa-star" :class="{'active-star': email.isStarred}" @click.stop="toggleStarEmail(email.id)"></span>
                    <email-preview :email="email" @openEmail="openEmail"></email-preview>
                </li>
            </ul>
        </section>
    `,

    props: ['emails'],
    
    data() {
        return {
      
        }
    },

    methods: {
        toggleStarEmail(emailId) {
            emailService.toggleStarEmail(emailId);
        }, 
        
        toggleReadEmail(emailId) {
            emailService.toggleReadEmail(emailId);
        },
        
        imageForDisplay(isRead) {
            return (isRead)? 'img/email-img/open-envelope.png' : 'img/email-img/close-envelope.png';
        },

        openEmail(emailId) {
            this.$router.push('/email/emails/'+emailId);
        }
    },

    components: {
        emailPreview
    }
}