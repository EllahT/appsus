'use strict'

import userMsg from '../../../cmps/user-msg.cmp.js';
import appLogo from '../../../cmps/logo.cmp.js';
import emailSearch from '../cmps/email-search.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailSort from '../cmps/email-sort.cmp.js';
import appNav from '../../../cmps/nav.cmp.js';

export default {
    template: `
    <section class="app-header email-header">
        <app-logo></app-logo>
        <div class="header-searchAndFilter">
            <email-search class="app-search" @searchBy="emitSearchBy" @clearSearch="emitClear"></email-search>
            <email-filter :isOptionFilterOn="isOptionFilterOn" @filtered="emitFilterBy"></email-filter>
            <email-sort @sorted="emitSortBy"></email-sort>
            <user-msg></user-msg>
        </div>
        <app-nav></app-nav>
    </section>
    `,

    props: ['isOptionFilterOn'],
    data() {
        return {

        }
    },
    created() {
        console.log('Email Header is alive');
        
    },

    methods: {
        emitSearchBy(searchParams) {
            this.$emit('searchBy',searchParams);
        },

        emitFilterBy(filter)  {
            this.$emit('filtered',filter);
        },

        emitSortBy(sorter)  {
            this.$emit('sorted',sorter);
        },

        emitClear() {
            this.$emit('clearSearch','');
        }
    },

    components: {
        appLogo,
        emailSearch,
        emailFilter,
        emailSort,
        appNav,
        userMsg
    }
}