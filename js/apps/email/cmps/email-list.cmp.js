'use strict'

import emailService from '../services/email-service.js';
import emailPreview from '../cmps/email-preview.cmp.js';

export default {
    template: `
        <section class="email-list-container">
            <ul class="email-list">
                <li class="email-item" v-for="email in emails" :key="email.id" 
                    :class="{'unread-item-container' : !email.isRead}"
                    @mouseover="changedHoveredEmail(email.id)"
                    @mouseout="changedHoveredEmail(undefined)"
                    @click="openEmail(email.id)">
                    <img class="email-envelope" :src="imageForDisplay(email.isRead)" @click.stop="toggleReadEmail(email.id)"/>
                    <span class="star fa fa-star" :class="{'active-star': email.isStarred}" @click.stop="toggleStarEmail(email.id)"></span>
                    <email-preview :email="email" @deleteEmail="deleteEmail"></email-preview>
                </li>
            </ul>
        </section>
    `,

    props: ['emails'],
    
    data() {
        return {
            hoveredEmail: ''
            //, isHovering: false
        }
    },

    methods: {
        isHovered(emailId) {
            return (emailId === this.hoveredEmail);
        },

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
            emailService.openEmail(emailId);
            this.$router.push('/email/emails/'+emailId);
        }, 

        changedHoveredEmail(emailId) {
            // console.log('hover')
            // if (this.isHovering) return;
            this.hoveredEmail = emailId;
            this.isHovering = true;
        }, 

        deleteEmail(emailId) {
            emailService.deleteEmail(emailId);
        }

        // , clearHoveredEmail() {
        //     console.log('out')
        //     this.isHovering = false;
        //     this.hoveredEmail = '';
        // }
    },

    components: {
        emailPreview
    }
}