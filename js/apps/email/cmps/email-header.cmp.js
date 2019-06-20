'use strict'

import appLogo from '../../../cmps/logo.cmp.js';
import emailSearch from '../cmps/email-search.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailSort from '../cmps/email-sort.cmp.js';
import appNav from '../../../cmps/nav.cmp.js';

export default {
    template: `
    <section class="email-header">
        <app-logo></app-logo>
        <email-search></email-search>
        <email-filter></email-filter>
        <email-sort></email-sort>
        <app-nav></app-nav>
    </section>
    `,
    data() {
        return {

        }
    },
    created() {
        console.log('Email Header is alive');
        
    }, 

    components: {
        appLogo,
        emailSearch,
        emailFilter,
        emailSort,
        appNav
    }
}