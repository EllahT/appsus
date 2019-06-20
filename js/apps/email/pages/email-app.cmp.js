'use strict'

import emailList from '../cmps/email-list.cmp.js';
import emailHeader from '../cmps/email-header.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailService from '../sevices/email-service.js';

export default {
    template: `
    <section class="email-app">
        <email-header></email-header>
        <email-nav></email-nav>
        <email-list :emails="emails"></email-list>
    </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    created() {
        console.log('Email is alive');
        emailService.query()
        .then((emails) => {this.emails = emails})
    }, 

    components: {
        emailList,
        emailHeader,
        emailNav
    }
}

