'use strict'

import emailList from '../cmps/email-list.cmp.js';
import emailHeader from '../cmps/email-header.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';

export default {
    template: `
    <section class="email-app">
        <email-header></email-header>
        <email-nav></email-nav>
        <email-list></email-list>
    </section>
    `,
    data() {
        return {

        }
    },
    created() {
        console.log('Email is alive');
        
    }, 

    components: {
        emailList,
        emailHeader,
        emailNav
    }
}

